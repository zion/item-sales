import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ItemsViewController extends Controller {
  @service router;
  @action
  deleteItem(item) {
    item.destroyRecord().then(() => {
      this.router.transitionTo('items.index');
    });
  }
}
