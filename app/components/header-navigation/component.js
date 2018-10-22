import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['site-header', 'header'],

  /**
   Injection of i18n translation service.

   @property i18n
   @type service
   @public
   */
  i18n: Ember.inject.service()
});
