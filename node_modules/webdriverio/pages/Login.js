'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
  this.username_field = "[data-qa=username-field]";
  this.password_field = "[data-qa=password-field]";
  this.submit_button = "[data-qa=login-button]";
 
  this.logInWith = function(username, password) {
    client
        .setValue(this.username_field, username)
        .setValue(this.password_field, password)
        .click(this.submit_button);
  }; 
}