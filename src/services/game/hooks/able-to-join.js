'use strict'

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        if (game.authorId !== hook.params.user._id) {
          console.log('Is not author, can only join');
          const action = hook.data.join ? '$addToSet' : '$pull';
          let data = {};
          data[action] = { joinedBy: hook.params.user._id };
          hook.data = data;
          console.log(hook.data);
        }
      })
  }
}
