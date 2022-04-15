import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemsEditController extends Controller {
  @service router;

  @action
  save() {
    this.item.validate().then(() => {
      if (this.item.get('isValid')) {
        this.item.save().then(() => {
          this.router.transitionTo('items.view', this.item.id);
        });
      }
    });
  }
}
