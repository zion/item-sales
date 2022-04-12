import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  item: validatePresence({ presence: true, message: 'Required' }),
  business_day: validatePresence({ presence: true, message: 'Required' }),
  total_qty: validatePresence({ presence: true, message: 'Required' }),
  total_sales: validatePresence({ presence: true, message: 'Required' }),
  total_cost: validatePresence({ presence: true, message: 'Required' }),
};
