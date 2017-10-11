'use strict';

var users = require('../controllers/users.server.controller');

module.exports = function(router) {
  router.get('/register', users.testGetUser);
  router.post('/register', users.createAccount);
  return router;
}
