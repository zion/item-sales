import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sales/view', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sales/view');
    assert.ok(route);
  });
});
