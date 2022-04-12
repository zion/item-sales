import Route from '@ember/routing/route';

export default class SalesViewRoute extends Route {
  model(params) {
    return this.store.findRecord('daily-item-sale', params.id);
  }
}
