'use strict'

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
          const action = '$push';
          let data = {};
          data[action] = { rows: hook.params.user._id };  // user_id --> rows
          hook.data = data;
      })
  }
}
