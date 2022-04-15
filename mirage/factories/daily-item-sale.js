import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  totalQty() {
    return faker.random.number({ min: 5, max: 150 });
  },
  totalSales() {
    const price = faker.random.number({ min: 20, max: 35 });
    return this.totalQty * price;
  },
  totalCost() {
    const price = faker.random.number({ min: 5, max: 15 });
    return this.totalQty * price;
  },
  businessDay() {
    return faker.date.past();
  },
});
