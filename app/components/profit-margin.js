import Component from '@glimmer/component';

export default class ProfitMarginComponent extends Component {
  get profit_margin() {
    return (this.args.sales - this.args.cost) / this.args.sales;
  }

  get profit_tier() {
    const profit = this.profit_margin;
    if (profit >= 0.7) {
      return 'high';
    } else if (profit < 0.7 && profit >= 0.5) {
      return 'mid';
    } else {
      return 'low';
    }
  }
}
