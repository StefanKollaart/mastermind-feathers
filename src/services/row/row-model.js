// src/services/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rowSchema = new Schema ({
  pegs: { type: Array },
  guesses: { type: Array },
  answer: { type: Array},
  game: { type: Schema.Types.ObjectId, ref: 'gameModel'},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const rowModel = mongoose.model('row', rowSchema);

module.exports = rowModel;
