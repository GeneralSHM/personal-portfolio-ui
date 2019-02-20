import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['header'],

  /**
   Injection of i18n translation service.

   @property i18n
   @type service
   @public
   */
  i18n: service(),

  /**
   * Property showing if user has scrolled down.
   *
   * @property isUserScrolledDown
   * @type {Boolean}
   */
  isUserScrolledDown: false,

  /**
   * Property determining if user has scrolled after rendering of the template.
   *
   * @property isUserScrolledDown
   * @type {Boolean}
   */
  hasUserScrolled: false,

  /**
   * The class which is binded to the logo based on the user scroll behaviour.
   *
   * @type {String}
   * @property squeezeLogoClass
   */
  squeezeLogoClass: computed('isUserScrolledDown', 'hasUserScrolled', function () {
    if (!this.get('hasUserScrolled')) {
      return '';
    }

    return this.get('isUserScrolledDown') ? 'squeezeLogo' : 'reverseSqueezeLogo';
  }),

  /**
   * The class which is binded to the whole header based on the user scroll behaviour.
   *
   *
   * @type {String}
   * @property squeezeHeaderClass
   */
  squeezeHeaderClass: computed('isUserScrolledDown', 'hasUserScrolled', function () {
    if (!this.get('hasUserScrolled')) {
      return '';
    }

    return this.get('isUserScrolledDown') ? 'squeezeHeader' : 'reverseSqueezeHeader';
  }),

  didInsertElement() {
    this._super(...arguments);

    window.addEventListener("scroll", this.handleScroll.bind(this));
  },

  willDestroyElement() {
    this._super(...arguments);

    window.removeEventListener("scroll", this.handleScroll);
  },

  /**
   * Fired when user scrolls. Sets the properties `isUserScrolledDown`, `hasUserScrolled`.
   * If the body is scrolled 1 pixes down it sets the property `isUserScrolledDown` to true.
   * The check with hardcoded 75 is because the body has margin 75px.
   *
   * @method handleScroll
   * @returns void
   */
  handleScroll() {
    const bcr = document.querySelector('body').getBoundingClientRect();
    this.set('isUserScrolledDown', bcr.y < 75);
    this.set('hasUserScrolled', true);
  }


});
