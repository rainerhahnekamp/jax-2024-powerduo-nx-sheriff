import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HolidaysEffects } from './lib/holidays.effects';
import { holidaysFeature } from './lib/holidays.reducer';

export const provideHolidays: () => EnvironmentProviders = () =>
  makeEnvironmentProviders([
    provideState(holidaysFeature),
    provideEffects([HolidaysEffects]),
  ]);

export { fromHolidays } from './lib/holidays.selectors';
export { holidaysActions } from './lib/holidays.actions';
