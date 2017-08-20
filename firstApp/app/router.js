import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home',{
    path: '/'
  });
  this.route('examples');
  this.route('todo');
});

export default Router;
