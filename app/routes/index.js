import Ember from 'ember';

export default Ember.Route.extend({
  rating: 0,
  isFormReviewShowes: false,

  model() {
    return Ember.RSVP.hash({
      restaurants: this.store.findAll('restaurant'),
      reviews: this.store.findAll('review')
    });
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
