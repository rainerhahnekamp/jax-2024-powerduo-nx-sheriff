import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { toObservable } from '@angular/core/rxjs-interop';
import { Configuration } from '@app/shared/config';
import {SecurityStore} from "@app/shared/security";

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [
      ({ queryParamMap }: ActivatedRouteSnapshot) => {
        const config = inject(Configuration);

        if (queryParamMap.has('mock-customers')) {
          config.updateFeatures({
            mockCustomers: queryParamMap.get('mock-customers') == '1',
          });
        }
        if (queryParamMap.has('mock-holidays')) {
          config.updateFeatures({
            mockHolidays: queryParamMap.get('mock-holidays') == '1',
          });
        }
      },
      () => {
        return toObservable(inject(SecurityStore).loaded).pipe(filter(Boolean));
      },
    ],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'holidays',
        loadChildren: () => import('@app/holidays/api'),
      },
      {
        path: 'customer',
        loadChildren: () => import('@app/customers/api'),
      },
    ],
  },
];
