'use strict';

module.exports = function(options) {
  return function createColorCode(hook) {
    var colorCode = new Array;
    for(var i = 1; i < 5; i++) {
      var randomNumber = parseInt((Math.random() * (7 - 1) + 1));
      console.log(randomNumber)
      colorCode.push(randomNumber);
    }
    hook.data.colorCode = colorCode;
  }
}
