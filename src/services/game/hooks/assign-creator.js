'use strict'

module.exports = function(options) {
  return function assignCreator(hook) {
    const user = hook.data.creator;
    hook.data.creatorId = user._id;
  }
}
