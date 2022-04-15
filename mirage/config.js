import dayjs from 'dayjs';

export default function () {
  this.logging = true;
  this.timing = 500;

  this.get('/items');
  this.get('/items/:id');
  this.post('/items');
  this.put('/items/:id');
  this.patch('/items/:id');
  this.del('/items/:id');
  this.get('/daily-item-sales');
  this.get('/daily-item-sales/:id');
  this.post('/daily-item-sales');
  this.put('/daily-item-sales/:id');
  this.del('/daily-item-sales/:id');

  this.get('/aggregate-sales', (schema, request) => {
    let sales = schema.db.dailyItemSales;
    sales = sales.map((sale) => {
      let item = schema.items.find(sale.itemId);
      sale['item_description'] = item.description;
      return sale;
    });

    let sorted_sales = sales.sort((a, b) => {
      return dayjs(b.business_date).toDate() - dayjs(a.business_date).toDate();
    });
    return sorted_sales;
  });
}
