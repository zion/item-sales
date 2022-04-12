import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class SalesIndexRoute extends Route {
  model() {
    return fetch('/daily-item-sales').then((response) => {
      return response.json();
    });
  }
}
