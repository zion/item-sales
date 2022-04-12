import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SalesCreateController extends Controller {
  @service router;

  get profit_margin() {
    if (this.new_sale.total_cost && this.new_sale.total_sales) {
      const profit = this.new_sale.total_sales - this.new_sale.total_cost;
      return profit / this.new_sale.total_sales;
    } else {
      return null;
    }
  }

  @action
  setDate(value) {
    this.new_sale.business_day = value.date;
  }

  @action
  createSale() {
    let new_sale = this.new_sale;
    new_sale.validate().then(() => {
      if (new_sale.get('isValid')) {
        new_sale.save().then(() => {
          this.router.transitionTo('items.view', new_sale.item.id);
        });
      }
    });
  }
}
