'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
  this.message_field = "[name=message]";
  this.name_field = "[name=name]";
  this.email_field = "[name=email]";
  this.phone_field = "[name=phone]";
  this.reply_button = "[data-qa=reply-button]";
  this.reply_send_button = "[data-qa=reply-send-button]";
  this.confirmation_message = "[data-qa=reply-message-sent]";

  this.replyAnAdWith = function(message, name, email, phone){
    var reply_button = this.reply_button;
    client
        .click(reply_button)
        .setValue(this.message_field, message)
        .setValue(this.name_field, name)
        .setValue(this.email_field, email)
        .setValue(this.phone_field, phone)
        .click(this.reply_send_button);
  };

  this.isConfirmationMessageDisplayed = function(){
    var confirmation_message = this.confirmation_message;
    client
      .isExisting(confirmation_message, function(err, isExisting) {
       expect(isExisting).to.equal(true);
    });
  };
}