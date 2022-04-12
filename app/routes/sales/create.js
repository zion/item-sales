import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import SaleValidations from '../../validations/sale';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default class SalesCreateRoute extends Route {
  model() {
    return RSVP.hash({
      items: this.store.findAll('item'),
      new_sale: this.store.createRecord('daily-item-sale'),
    });
  }

  setupController(controller, models) {
    controller.set('items', models.items);
    let new_sale = new Changeset(
      models.new_sale,
      lookupValidator(SaleValidations),
      SaleValidations
    );
    controller.set('new_sale', new_sale);
  }
}
