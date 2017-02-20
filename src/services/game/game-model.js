// src/services/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = {
  1: 'red',
  2: 'cyan',
  3: 'green',
  4: 'orange',
  5: 'magenta',
  6: 'blue',
};

const rowSchema = new Schema ({
  pegs: { type: Array },
  guesses: { type: Array },
  answer: { type: Array},
  game: { type: Schema.Types.ObjectId, ref: 'gameModel'},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameSchema = new Schema({
  name: { type: String, required: true },
  players: [ Schema.Types.ObjectId ],
  creator: { type: Schema.Types.ObjectId, ref: 'user' },
  started: { type: Boolean, default: false },
  activeTurn: { type: Schema.Types.ObjectId, ref: 'user' },
  rows: [ rowSchema ],
  colorCode: { type: Array },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);
// const rowModel = mongoose.model('row', rowSchema);

module.exports = gameModel;
