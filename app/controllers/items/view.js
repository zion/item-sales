import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import dayjs from 'dayjs';
import WeekOfYear from 'dayjs/plugin/weekOfYear';

export default class ItemsViewController extends Controller {
  @service router;
  @action
  deleteItem(item) {
    item.destroyRecord().then(() => {
      this.transitionToRoute('/');
    });
  }

  get weekly_sales() {
    let sales_by_week = {};
    if (!this.model.isDeleted) {
      this.model.daily_item_sale.map((sale) => {
        dayjs.extend(WeekOfYear);
        const dow = dayjs(sale.business_day).startOf('w').$d;
        const date = dayjs(dow).format('MM/DD/YYYY');
        // if first day of week is not in object, create with first sale
        // else add values
        if (sales_by_week[date]) {
          sales_by_week[date]['total_qty'] += sale.total_qty;
          sales_by_week[date]['total_sales'] += sale.total_sales;
          sales_by_week[date]['total_cost'] += sale.total_cost;
        } else {
          sales_by_week[date] = {
            business_date: date,
            total_sales: sale.total_sales,
            total_cost: sale.total_cost,
            total_qty: sale.total_qty,
          };
        }
      });
      let arr = Object.keys(sales_by_week).map((k) => sales_by_week[k]);
      let sorted_arr = arr.sort((a, b) => {
        return dayjs(b.business_date).$d - dayjs(a.business_date).$d;
      });
      return sorted_arr;
    }
  }
}
