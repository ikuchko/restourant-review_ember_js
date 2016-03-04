import Ember from 'ember';

export default Ember.Component.extend({
  rating: 0,

  actions: {
    addReview(params) {
      var params = {
        name: this.get('name'),
        review: this.get('review'),
        date: new Date(),
        rating: this.get('rating'),
        restaurant: params
      };
      this.set('rating', 0);
      this.set('name', '');
      this.set('review', '');
      this.sendAction('addReview', params);
      this.sendAction('closeReviewForm');
    },

    updateRating(params) {
      this.set('rating', params.rating);
    },
  }
});
