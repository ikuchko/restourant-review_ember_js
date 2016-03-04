import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  review: DS.attr(),
  rating: DS.attr(),
  date: DS.attr(),
  restaurant: DS.belongsTo('restaurant', { async: true }),
});
