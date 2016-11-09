// import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  address: attr('string'),
  reviews: hasMany('review'),
  users: hasMany('user'),
});
