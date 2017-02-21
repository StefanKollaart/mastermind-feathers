'use strict'

module.exports = function(options) {
  return function assignCreator(hook) {
    const user = hook.data.creator;
    hook.data.creator = user._id;
    hook.data.players = [];
    hook.data.players[0] = user._id;
    // hook.data.activeTurn = user._id;
  }
}
