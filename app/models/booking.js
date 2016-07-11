import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  'code': attr('string'),
  'parking': belongsTo('parking'),
  'confirmed': attr('boolean', {defaultValue: false}),
  'createdAt' : attr('date')
});
