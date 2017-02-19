'use strict'

module.exports = function(options) {
  return function assignCreator(hook) {
    const user = hook.data.creator;
    hook.data.creator = user._id;
    hook.data.players = user._id;
  }
}
