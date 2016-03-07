import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),
  isFormReviewShowes: false,
  isFavoriteIconShowes: false,

  reviews: Ember.computed.map('restaurant.reviews', function(reviews) { return reviews; }),
  rating: Ember.computed('rating', function(){
    var rating = 0;
    for (var review of this.get('reviews')) {
      rating += review.get('rating');
    }
    if (rating === 0) {
      return 0;
    } else {
      return Math.round(rating / this.get('reviews').length);
    }
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
