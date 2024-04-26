import {
  AddCustomerComponent,
  CustomersContainerComponent,
  CustomersRootComponent,
  dataGuard,
  EditCustomerComponent,
} from '../feat-main';
import { provideCustomersData } from '@app/customers/data';

export default [
  {
    path: '',
    canActivate: [dataGuard],
    component: CustomersRootComponent,
    providers: [provideCustomersData()],
    children: [
      {
        path: '',
        component: CustomersContainerComponent,
      },
      {
        path: 'new',
        component: AddCustomerComponent,
        data: { mode: 'new' },
      },
      {
        path: ':id',
        component: EditCustomerComponent,
        data: { mode: 'edit' },
      },
    ],
  },
];
