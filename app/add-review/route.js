import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model(params) {
    return this.get('store').findRecord('location', params.location_id);
  },

  review: {},

  actions: {
    createReview(data) {
      let review = this.get('store').createRecord('review', data);
      this.transitionTo('location', data.location);
      return review.save()
      .then(() => {
        this.set('review', {});
      })
      // .then((res) => this.transitionTo('location', res.location_id))
      .catch((err) => console.error(err));
    }
  }
});
