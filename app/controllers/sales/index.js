import Controller from '@ember/controller';
import dayjs from 'dayjs';
import WeekOfYear from 'dayjs/plugin/weekOfYear';
import { inject as service } from '@ember/service';

export default class SalesIndexController extends Controller {
  @service intl;
  get sales() {
    let sales_by_week = {};
    this.model.map((sale) => {
      dayjs.extend(WeekOfYear);
      const woy = dayjs(sale.business_day).week().toString();
      const y = dayjs(sale.business_day).year();
      // debugger
      if (sales_by_week[y] === undefined) {
        // Add year to array
        sales_by_week[y] = {};
      }

      // if (sales_by_week[y][woy] === undefined) {

      // }
      // add week to array

      // debugger
      // sales_by_week[y][woy] = {
      //   business_week: dayjs(sale.business_day).startOf('w').$d,
      //   total_sales: sale.total_sales,
      //   total_cost: sale.total_cost,
      // };
    });
    debugger
    return sales_by_week;
  }
}
