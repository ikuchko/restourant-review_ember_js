import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  isFavorite: false,

  click: function() {
    if (!this.get('isFavorite')) {
      this.set('isFavorite', true)
      this.get('favorite').add(this.get('restaurant'));
    }
  },
});
