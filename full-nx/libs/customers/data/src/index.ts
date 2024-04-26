import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { customersFeature } from './lib/customers.reducer';
import { CustomersEffects } from './lib/customers.effects';

export const provideCustomersData: () => EnvironmentProviders = () =>
  makeEnvironmentProviders([
    provideState(customersFeature),
    provideEffects([CustomersEffects]),
  ]);

export { fromCustomers } from './lib/customers.selectors';
export { customersActions } from './lib/customers.actions';
