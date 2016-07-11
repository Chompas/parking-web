import Ember from 'ember';

export const toYesNo = ([value]) => value ? 'Si' : 'No';

export default Ember.Helper.helper(toYesNo);
