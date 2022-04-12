import Route from '@ember/routing/route';
import ItemValidations from '../../validations/item';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default class ItemsCreateRoute extends Route {
  model() {
    return this.store.createRecord('item');
  }

  setupController(controller, model) {
    let item_changeset = new Changeset(
      model,
      lookupValidator(ItemValidations),
      ItemValidations
    );
    controller.set('new_item', item_changeset);
  }
}
