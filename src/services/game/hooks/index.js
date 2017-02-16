'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

// before hook: assign authorId to the _id of the currently logged in user.
const assignAuthor = require('./assign-author');
const assignColorCode = require('./create-color-code')
// after hook: look up the user with the matching authorId in the users service and add it as 'author'
const populateAuthor = common.populate('author', { service: 'users', field: 'authorId' });
const populateLikes = common.populate('likes', { service: 'users', field: 'likedBy' })

// after hook: let users join the game
const makeJoinable = require('./able-to-join');
const makeLikeable = require('./make-likeable');

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
    // auth.restrictToAuthenticated()
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
