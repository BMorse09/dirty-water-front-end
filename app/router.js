import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('user', { path: '/users/:user_id' });
  this.route('locations');
  this.route('location', { path: '/locations/:location_id'});
  this.route('reviews');
  this.route('review', { path: '/reviews/:review_id'});
  this.route('add-review', { path: '/locations/:location_id/add-review'});
});


export default Router;
