import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class SalesIndexRoute extends Route {
  model() {
    return fetch('/aggregate-sales').then((response) => {
      return response.json();
    });
  }
}
