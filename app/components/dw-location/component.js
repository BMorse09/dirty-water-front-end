import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isCurrentUser: Ember.computed.alias('auth.credentials.id'),

  actions: {
    deleteItem (review) {
    return this.sendAction('deleteItem', review);
      },
    },
  });
