// src/seeds.js

const feathers = require('feathers-client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const host = 'http://localhost:3030';
const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    type: 'local'
  }))
  .configure(rest(host).superagent(superagent));

// services
const userService = app.service('users');
const gameService = app.service('games');

const user = {
  name: 'Jamie Gulliver',
  email: 'jamie@gulliver.dev',
  password: 'abcd1234'
}


userService.create(user)
  .then((result) => {
    console.log('User created');
  })
  .catch((error) => {
    console.error('Error creating user!', error);
  });
