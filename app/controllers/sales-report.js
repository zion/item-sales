import Controller from '@ember/controller';
import dayjs from 'dayjs';
import WeekOfYear from 'dayjs/plugin/weekOfYear';

export default class SalesReportController extends Controller {
  get sales() {
    let sales_by_week = {};
    this.model.map((sale) => {
      dayjs.extend(WeekOfYear);
      const dow = dayjs(sale.businessDay).startOf('w').$d;
      const date = dayjs(dow).format('MM/DD/YYYY');
      // if first day of week is not in object, create with first sale
      // else add values
      if (sales_by_week[date]) {
        sales_by_week[date]['total_qty'] += sale.totalQty;
        sales_by_week[date]['total_sales'] += sale.totalSales;
        sales_by_week[date]['total_cost'] += sale.totalCost;
      } else {
        sales_by_week[date] = {
          business_date: date,
          total_sales: sale.totalSales,
          total_cost: sale.totalCost,
          total_qty: sale.totalQty,
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
