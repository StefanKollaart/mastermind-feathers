'use strict'

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
          const action = '$set';
          let data = {};
          data[action] = { secondPlayerId: hook.params.user._id };
          hook.data = data;
      })
  }
}
