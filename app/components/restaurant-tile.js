import Ember from 'ember';

export default Ember.Component.extend({
  isFormReviewShowes: false,
  reviews: Ember.computed.map('restaurant.reviews', function(reviews) { return reviews; }),
  rating: Ember.computed('rating', function(){
    var rating = 0;
    for (var review of this.get('reviews')) {
      rating += review.get('rating');
    }
    return rating;
  }),

  actions: {
    openNewReviewForm() {
      this.set('isFormReviewShowes', true);
    },

    closeNewReviewForm() {
      this.set('isFormReviewShowes', false);
    },

    addReview(params) {
      this.sendAction('addReview', params);
    },
  }
});
