import Route from '@ember/routing/route';
import ENV from 'item-sales/config/environment';

export default class SalesReportRoute extends Route {
  queryParams = {
    sort: {
      refreshModel: true,
    },
    sort_direction: {
      refreshModel: true,
    },
  };

  model(params) {
    let url = `${ENV.APP.HOST_URL}/aggregate-sales`;
    if (params.sort) {
      url += `?sort=${params.sort}&sort_direction=${params.sort_direction}`;
    }
    return fetch(url).then((response) => {
      return response.json();
    });
  }
  // model(params) {
  //   return this.store.query('aggregate-sale', params);
  // }
}
