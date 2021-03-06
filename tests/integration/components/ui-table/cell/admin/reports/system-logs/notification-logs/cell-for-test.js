import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupIntegrationTest } from 'open-event-frontend/tests/helpers/setup-integration-test';
import { render } from '@ember/test-helpers';

module('Integration | Component | ui table/cell/admin/reports/system logs/notification logs/cell for', function(hooks) {
  setupIntegrationTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{ui-table/cell/admin/reports/system-logs/notification-logs/cell-for}}`);
    assert.equal(this.element.textContent.trim(), 'No Name Provided');

  });
});
