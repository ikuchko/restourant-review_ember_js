import Ember from 'ember';

export default Ember.Component.extend({
  isFormReviewShowes: false,

  actions: {
    openNewReviewForm() {
      this.set('isFormReviewShowes', true);
    },

    closeNewReviewForm() {
      this.set('isFormReviewShowes', false);
    },

    addReview(params) {
      this.sendAction('addReview', params);
    }
  }
});
