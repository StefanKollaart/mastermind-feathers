'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const assignColorCode = require('./create-color-code')
const makeJoinable = require('./able-to-join');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    assignColorCode(),
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
    // populateAuthor,
    // populateLikes,
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
