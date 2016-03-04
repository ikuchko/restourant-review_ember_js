import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cuisine: DS.attr(),
  address: DS.attr(),
  phone: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
