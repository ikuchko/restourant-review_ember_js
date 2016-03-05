import Ember from 'ember';

export default Ember.Component.extend({
  isFormReviewShowes: false,
  reviews: Ember.computed.map('restaurant.reviews', function(reviews) { return reviews; }),
  rating: Ember.computed('rating', function(){
    console.log(this.get('reviews')[0].rating);
    // console.log(this.get('restaurant.reviews'));
    return 2;
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
