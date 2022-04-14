export default function () {
  this.logging = true;
  this.timing = 2000;

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
    return { message: 'hello' };
  });
}
