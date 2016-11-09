import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  review: {},

  actions: {
    create() {
        this.set('review.location', this.get('location'));
        this.sendAction('create', this.get('review'));
    },

    reset() {
      this.set('review', {});
    }
  }
});
