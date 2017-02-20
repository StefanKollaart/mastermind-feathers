'use strict'

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {

          if (hook.params.user_id === undefined) {
            return
          }
          const action = '$push';
          let data = {};
          data[action] = { players: hook.params.user._id };
          hook.data = data;
      })
  }
}
