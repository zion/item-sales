import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  description() {
    return faker.commerce.productName();
  },
});
