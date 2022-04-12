import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SalesViewController extends Controller {
  @service router;
  @action
  deleteSale(sale) {
    sale.destroyRecord().then(() => {
      this.router.transitionTo('sales.index');
    });
  }
}
