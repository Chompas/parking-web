import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('parking', function() {
    this.route('detail', {path: '/:parkingId'});
  });
});

export default Router;
