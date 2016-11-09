import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user', {
    inverse: 'reviews'
  }),
  location: belongsTo('location', {
    inverse: 'reviews'
  }),
  content: attr('string'),
});
