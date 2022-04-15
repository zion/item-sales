import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import SaleValidations from '../../validations/sale';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default class SalesEditRoute extends Route {
  model(params) {
    return RSVP.hash({
      sale: this.store.findRecord('daily-item-sale', params.id),
      items: this.store.findAll('item'),
    });
  }
  setupController(controller, models) {
    controller.set('items', models.items);
    let sale = new Changeset(
      models.sale,
      lookupValidator(SaleValidations),
      SaleValidations
    );
    controller.set('sale', sale);
  }
}
