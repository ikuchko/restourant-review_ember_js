import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('favorite-restaurants', 'Integration | Component | favorite restaurants', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{favorite-restaurants}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#favorite-restaurants}}
      template block text
    {{/favorite-restaurants}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
