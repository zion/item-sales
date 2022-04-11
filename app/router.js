import EmberRouter from '@ember/routing/router';
import config from 'item-sales/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('items', function () {
    this.route('edit', { path: '/:id/edit' });
    this.route('view', { path: '/:id' });
  });
});
