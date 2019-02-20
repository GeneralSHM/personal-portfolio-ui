import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', { path: '/' });
  this.route('contact');
  this.route('about');
  this.route('current-research');
  this.route('researches');
});

export default Router;
