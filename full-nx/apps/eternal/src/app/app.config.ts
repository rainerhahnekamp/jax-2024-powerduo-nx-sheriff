import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { deAT } from 'date-fns/locale';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ErrorHandlerService } from './core/error-handler.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { customersInterceptor } from '@app/customers/api';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {holidaysInterceptor} from "@app/holidays/api";
import {baseUrlInterceptor, errorInterceptor} from "@app/shared/http";
import {loadingInterceptor, sharedUiMessagingProvider} from "@app/shared/ui-messaging";
import {securityInterceptor} from "@app/shared/security";
import {sharedMasterDataProvider} from "@app/shared/master-data";
import {Configuration} from "@app/shared/config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideStore(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([
        customersInterceptor,
        holidaysInterceptor,
        baseUrlInterceptor,
        loadingInterceptor,
        errorInterceptor,
        securityInterceptor,
      ]),
      withFetch(),
    ),
    provideStoreDevtools({ connectInZone: true }),
    ...sharedMasterDataProvider,
    ...sharedUiMessagingProvider,
    importProvidersFrom([MatDateFnsModule]),
    {
      provide: MAT_DATE_LOCALE,
      useValue: deAT,
    },
    { provide: LOCALE_ID, useValue: 'de-AT' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: Configuration,
      useFactory: () =>
        new Configuration('https://api.eternal-holidays.net', true, true),
    }
  ],
};
