import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  isFavorite: false,

  actions: {
    addToFavorite() {
      if (!this.get('isFavorite')) {
        this.set('isFavorite', true)
        this.get('favorite').add(this.get('restaurant'));
      }
    },

    removeFromFavorite() {
      this.set('isFavorite', false)
      this.get('favorite').remove(this.get('restaurant'));
    }
  }

});
