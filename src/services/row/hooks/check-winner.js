'use strict'

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((row) => {
          const action = '$push';
          let data = {};
          data[action] = { rows : hook.data.rows[0] };
          hook.data = data;

      })
}
}
