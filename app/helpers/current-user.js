import Ember from 'ember';

export function currentUser(params) {
  if (params[0] === params[1]) {
    return true;
  }
}

export default Ember.Helper.helper(currentUser);
