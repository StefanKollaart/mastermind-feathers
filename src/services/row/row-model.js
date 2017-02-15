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

const rowSchema = new Schema({
  guesses: { type: Array, required: true },
  answer: { type: Array, required: true }
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const rowModel = mongoose.model('row', rowSchema);

module.exports = rowModel;
