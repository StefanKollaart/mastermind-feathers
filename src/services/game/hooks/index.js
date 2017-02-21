'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const assignColorCode = require('./create-color-code')
const makeJoinable = require('./join-game');
const updatePegs = require('./update-pegs');

const assignCreator = require('./assign-creator');
const populateCreator = common.populate('creator', { service: 'users', field: 'creator' });
const populatePlayers = common.populate('players', { service: 'users', field: 'players' });
// const populateSecondPlayer = common.populate('players', { service: 'users', field: 'players' });
// const populateColorCode = common.populate('colorCode', { service: '', field: 'colorCode'});

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    assignColorCode(),
    assignCreator(),
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    makeJoinable(),
    updatePegs(),
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    // makeJoinable(),
    // updatePegs(),
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ]
};

exports.after = {
  all: [
    populateCreator,
    populatePlayers,
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
