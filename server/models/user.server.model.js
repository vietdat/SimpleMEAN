'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function(next) {
  var user = this;

  //If the password has not been modified in this save operation, leave it alone (So we don't double hash it)
  if (!user.isModified('password')) {
    next();
    return;
  }

  //Encrypt it using bCrypt. Using the Sync method instead of Async to keep the code simple.
  var hashedPwd = bcrypt.hashSync(user.password, 9);

  //Replace the plaintext pw with the Hash+Salted pw;
  user.password = hashedPwd;

  //Continue with the save operation
  next();
});

UserSchema.methods.passwordMatches = function(plainText) {
  var user = this;
  // console.log('compareSync', plainText, user.password);
  return bcrypt.compareSync(plainText, user.password);
};

mongoose.model('User', UserSchema);
