'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const assignColorCode = require('./create-color-code')
const makeJoinable = require('./join-game');

const assignCreator = require('./assign-creator');
const populateCreator = common.populate('creator', { service: 'users', field: 'creatorId' });
const populateSecondPlayer = common.populate('secondPlayer', { service: 'users', field: 'secondPlayerId' });
const populateColorCode = common.populate('colorCode', { service: '', field: 'colorCode'});

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
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    makeJoinable(),
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
    populateSecondPlayer,
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
