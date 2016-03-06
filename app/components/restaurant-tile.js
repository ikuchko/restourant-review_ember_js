import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  isFormReviewShowes: false,
  isFavoriteIconShowes: false,

  reviews: Ember.computed.map('restaurant.reviews', function(reviews) { return reviews; }),
  rating: Ember.computed('rating', function(){
    var rating = 0;
    for (var review of this.get('reviews')) {
      rating += review.get('rating');
    }
    return Math.round(rating / this.get('reviews').length);
  }),

  mouseEnter: function() {
    console.log('show!')
    this.set('isFavoriteIconShowes', true);
  },

  mouseLeave: function() {
    this.set('isFavoriteIconShowes', false);
  },

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

    addFavorite(restaurant) {
      this.get('shoppingCart').add(restaurant);
    },
  }
});
