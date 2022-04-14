import Controller from '@ember/controller';
import dayjs from 'dayjs';
import WeekOfYear from 'dayjs/plugin/weekOfYear';
import { inject as service } from '@ember/service';

export default class SalesIndexController extends Controller {
  @service intl;
  get sales() {
    let sales_by_week = [];
    this.model.map((sale) => {
      let week = this.intl.formatDate(sale.business_day);
      dayjs.extend(WeekOfYear);
      const woy = dayjs(sale.business_day).week();
      if (sales_by_week[woy]) {
        // increase sales
      } else {
        // add week to array
        sales_by_week[woy] = {
          business_week: dayjs(sale.business_day).startOf('w').$d,
          total_sales: sale.total_sales,
          total_cost: sale.total_cost,
        };
      }
      // const woy = dayjs(sale.business_day).week();
    });
    debugger
    return sales_by_week;
  }
}
