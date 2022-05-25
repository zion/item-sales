import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ItemsCreateController extends Controller {
  @action
  addItem() {
    let new_item = this.new_item;
    new_item.validate().then(() => {
      if (new_item.get('isValid')) {
        new_item.save().then(() => {
          this.transitionToRoute('items.index');
        });
      }
    });
  }
}
