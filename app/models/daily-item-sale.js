import Model, { attr, belongsTo } from '@ember-data/model';

export default class DailyItemSaleModel extends Model {
  @belongsTo('item') item;
  @attr('date') business_day;
  @attr('number') total_qty;
  @attr('number') total_sales;
  @attr('number') total_cost;
}
