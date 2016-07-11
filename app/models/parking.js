import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  "name" : attr('string'),
  "lat" : attr('string'),
  "lon" : attr('string'),
  "price" : attr('number'),
  "hours" : attr('string'),
  "address" : attr('string'),
  "neighborhood" : attr('string'),
  "occupancy": attr('number'),
  'bookings': hasMany('booking')
});
