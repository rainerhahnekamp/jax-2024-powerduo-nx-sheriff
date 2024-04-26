import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { customersFeature } from '@app/customers/data/customers.reducer';
import { CustomersEffects } from '@app/customers/data/customers.effects';

export const provideCustomersData: () => EnvironmentProviders = () =>
  makeEnvironmentProviders([
    provideState(customersFeature),
    provideEffects([CustomersEffects]),
  ]);

export { fromCustomers } from './customers.selectors';
export { customersActions } from './customers.actions';
