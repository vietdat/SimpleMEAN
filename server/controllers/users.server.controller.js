var mongoose = require('mongoose'),
  User = require('./../models/user.server.model.js'),
  UserModel = mongoose.model('User'),
  _ = require('lodash'),
  async = require('async'),
  jwt = require('jsonwebtoken');

/**
 * Create a account
 */
exports.createAccount = function(req, res) {
  async.auto({
    init: function(done) {
      if (!req.body.firstName) {
        done({
          code: 400,
          message: 'First name is missing'
        });
        return;
      }
      if (!req.body.lastName) {
        done({
          code: 400,
          message: 'Last name is missing'
        });
        return;
      }
      if (!req.body.email) {
        done({
          code: 400,
          message: 'Email is missing'
        });
        return;
      }
      if (!req.body.password) {
        done({
          code: 400,
          message: 'Password is missing'
        });
        return;
      }

      done();
    },
    checkEmailExist: ['init', function(data, done) {
      UserModel.findOne({
        email: req.body.email
      }).exec(function(err, doc) {
        if(doc) {
          done({
            code: 1101,
            message: 'Account is existed'
          });
          return;
        } else {
          done();
        }
      });
    }],
    saveAccount: ['checkEmailExist', function(data, done) {
      new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }).save(done);
    }]
  }, function(err, data) {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      code: 200,
      message: 'Register success'
    });
    return;
  });
};

exports.testGetUser = function(req, res) {
  async.auto({
    init: function(done) {
      done();
    }
  }, function(err, data) {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      code: 200,
      message: 'Test success'
    });
    return;
  });
};
