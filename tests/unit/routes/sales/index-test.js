import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sales/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sales/index');
    assert.ok(route);
  });
});
