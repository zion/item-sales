import Route from '@ember/routing/route';

export default class ItemsIndexRoute extends Route {
  model() {
    return this.store.findAll('item');
  }
}
