'use strict'

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        if(hook.data.rows) {
          const action = '$push';
          let data = {};

          var currentRow = hook.data.rows.length - 1

          var answerArray = hook.data.rows[currentRow].pegs.map(function(answer, index) {

            switch (answer) {
              case hook.id.colorCode[index]:
                return 0;
                break;

              case hook.id.colorCode[0]:
                return 1;
                break;

              case hook.id.colorCode[1]:
                return 1;
                break;

              case hook.id.colorCode[2]:
                return 1;
                break;

              case hook.id.colorCode[3]:
                return 1;
                break;

              default:
                return 2;
                break;

            }
          });

          hook.data.rows[0].answer = answerArray.sort()

          var overdreven = answerArray.reduce(function(i, k) {
            if(i == 0 && k == 0) {
              return true;
            } else {
              return false;
            }
          });

          if(overdreven) {
            hook.data.rows[0].pegs = hook.data.rows[currentRow].pegs
            data[action] = { rows : hook.data.rows[0] };
            hook.data = data;
            data['$set'] = { ended: true };

          } else {

            var newPlayer;

            for (var i = 0; i < hook.id.players.length; i++) {
              if(hook.id.players[i]._id != hook.id.activeTurn) {
                newPlayer = hook.id.players[i]._id;
              }
          }

            hook.data.rows[0].pegs = hook.data.rows[currentRow].pegs

            data[action] = { rows : hook.data.rows[0]};
            data['$set'] = { activeTurn: newPlayer };
            hook.data = data;

        }
        } else {
          hook.id
      }
    })
  }
}
