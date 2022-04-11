import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  total_qty() {
    return faker.random.number({ min: 5, max: 150 });
  },
  total_sales() {
    const price = faker.random.number({ min: 20, max: 35 });
    return this.total_qty * price;
  },
  total_cost() {
    const price = faker.random.number({ min: 5, max: 15 });
    return this.total_qty * price;
  },
  business_day() {
    return new Date();
  },
});
