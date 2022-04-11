import Model, { attr, hasMany } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr('string') description;
  @hasMany('daily-item-sale') daily_item_sale;
}
