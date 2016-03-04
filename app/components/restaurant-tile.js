import Ember from 'ember';

export default Ember.Component.extend({
  isFormReviewShowes: false,

  actions: {
    openReviewForm() {
      this.set('isFormReviewShowes', true);
    },

    closeReviewForm() {
      this.set('isFormReviewShowes', false);
    },

    addReview(params) {
      this.sendAction('addReview', params);
    }
  }
});
