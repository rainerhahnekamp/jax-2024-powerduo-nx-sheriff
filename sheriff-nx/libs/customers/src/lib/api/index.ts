import customersRoutes from './customers.routes';
import { fromCustomers } from '@app/customers/data';

export default customersRoutes;
export const selectSelectedCustomer = fromCustomers.selectSelectedCustomer;
export {
  Customer,
  createCustomer,
  createCustomers,
} from '@app/customers/model';

export { customersInterceptor } from './customers.interceptor';
