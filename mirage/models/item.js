import { Model, hasMany } from 'miragejs';

export default Model.extend({
  dailyItemSale: hasMany(),
});
