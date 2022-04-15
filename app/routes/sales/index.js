import Route from '@ember/routing/route';

export default class SalesIndexRoute extends Route {
  model() {
    return this.store.findAll('daily-item-sale');
  }
}
