// src/services/recipe/recipe-model.js

'use strict';

// recipe-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorScheme = {
  1: 'red',
  2: 'cyan',
  3: 'green',
  4: 'orange',
  5: 'magenta',
  6: 'blue',
  'correct': 'green',
  'correctColor': 'yellow'
};

const gameSchema = new Schema({
  name: { type: String, required: true },
  players: [ Schema.Types.ObjectId ],
  creator: { type: Schema.Types.ObjectId, ref: 'user' },
  started: { type: Boolean, default: false },
  turn: [ Schema.Types.ObjectId ],
  colorCode: { type: Array, required: true }
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
