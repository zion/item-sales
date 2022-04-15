import Route from '@ember/routing/route';

export default class SalesReportRoute extends Route {
  model() {
    return fetch('/aggregate-sales').then((response) => {
      return response.json();
    });
  }
}
