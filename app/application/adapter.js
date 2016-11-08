import ENV from 'dirty-water-front-end/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

import Ember from 'ember';

export default ActiveModelAdapter.extend({
  host: 'http://localhost:4741',

  auth: Ember.inject.service(),

  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});