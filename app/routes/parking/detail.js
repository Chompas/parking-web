import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      parking: this.store.findRecord('parking', params.parkingId),
      bookings: this.store.query('booking', {parkingId: params.parkingId})
    });
  },

  actions: {
    confirmBooking(booking) {
      booking.set('confirmed', true);
      booking.save();
    }
  }
});
