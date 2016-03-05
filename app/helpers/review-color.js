import Ember from 'ember';

export function reviewColor(params/*, hash*/) {
  var rating = params[0];
  if (rating > 3) {
    return 'review-green';
  } else if (rating >=2) {
    return 'review-grey';
  } else {
    return 'review-red';
  }
}

export default Ember.Helper.helper(reviewColor);
