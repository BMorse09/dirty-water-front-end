import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('location', params.location_id);
  },

  actions:{
    deleteItem (review){
    return review.destroyRecord('deleteItem', this.get('review'));
      },
    },
});
