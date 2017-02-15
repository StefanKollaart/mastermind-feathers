'use strict';

const service = require('feathers-mongoose');
const row = require('./row-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: row,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/rows', service(options));

  // Get our initialize service to that we can bind hooks
  const recipeService = app.service('/rows');

  // Set up our before hooks
  recipeService.before(hooks.before);

  // Set up our after hooks
  recipeService.after(hooks.after);
};
