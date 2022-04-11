import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  description() {
    return faker.commerce.productName();
  },
  afterCreate(item, server) {
    server.createList('daily-item-sale', 5, { item: item });
  },
});
