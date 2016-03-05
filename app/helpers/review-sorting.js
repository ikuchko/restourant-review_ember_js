import Ember from 'ember';

export function reviewSorting(params/*, hash*/) {
  var reviews = params[0];
  var reviewList = reviews.sortBy('date').reverse();
  return reviewList;
}

export default Ember.Helper.helper(reviewSorting);
