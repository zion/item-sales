import Route from '@ember/routing/route';

export default class ItemsViewRoute extends Route {
  model(params) {
    return this.store.findRecord('item', params.id, {
      include: 'daily_item_sale',
    });
  }
}
