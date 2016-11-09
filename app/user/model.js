// import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  reviews: hasMany('review'),
  locations: hasMany('location')
});
