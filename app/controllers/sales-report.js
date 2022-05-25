import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SalesReportController extends Controller {
  queryParams = ['sort', 'sort_direction'];
  @tracked sort = null;
  @tracked sort_direction = null;

  @action
  changeSortColumn(column) {
    this.sort = column;
    if (this.sort_direction == 'ASC') {
      this.sort_direction = 'DESC';
    } else {
      this.sort_direction = 'ASC';
    }
  }
}
