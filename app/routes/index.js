import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },

  actions: {
    addReview(params) {
      var newReview = this.store.createRecord('review', params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return restaurant.save();
      });
    }
  }
});
