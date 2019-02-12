import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['site-header', 'header'],

  /**
   Injection of i18n translation service.

   @property i18n
   @type service
   @public
   */
  i18n: service()
});
