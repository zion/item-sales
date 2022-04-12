import Route from '@ember/routing/route';
import ItemValidations from '../../validations/item';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default class ItemsEditRoute extends Route {
  model(params) {
    return this.store.findRecord('item', params.id);
  }
  setupController(controller, model) {
    let item_changeset = new Changeset(
      model,
      lookupValidator(ItemValidations),
      ItemValidations
    );
    controller.set('item', item_changeset);
  }
}
