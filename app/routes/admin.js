import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newRestaurant = this.store.createRecord('restaurant', params);
      newRestaurant.save();
    }
  }
});
