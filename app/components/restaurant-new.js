import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        cuisine: this.get('cuisine'),
        address: this.get('address'),
        phone: this.get('phone'),
        image: this.get('image'),
        rating: 0
      };
      this.set('name', '');
      this.set('cuisine', '');
      this.set('address', '');
      this.set('phone', '');
      this.set('image', '');
      this.sendAction('save', params);
    }
  }
});
