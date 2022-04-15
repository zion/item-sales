import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SalesEditController extends Controller {
  @action
  updateSale() {
    let sale = this.sale;
    sale.validate().then(() => {
      if (sale.get('isValid')) {
        sale.save().then(() => {
          this.transitionToRoute('items.view', sale.item.id);
        });
      }
    });
  }
}
