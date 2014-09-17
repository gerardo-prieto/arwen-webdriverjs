'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
  this.post_button = "[data-qa=post-button]";
  this.myolx_logged_in = "[data-qa=my-olx-loggedIn]";
  this.myolx_logged_out = "[data-qa=my-olx-loggedOut]";
  this.logout_button = "[data-qa=logout-link]";
  this.select_city_link = "[data-qa=select-city]";
  this.change_city_link = "[data-qa=change-city]";
  this.search_field = "[data-qa=search-input]";
  this.search_button = "[data-qa=search-submit]";
  
  this.go = function() {
        client
            .deleteCookie()
            .url(baseURL + '/?location=www.olx.com.py')
            .setCookie({name: 'forcedPlatform', value: platform })
            .setCookie({name: 'showInterstitial', value: '1' })
            .refresh()
            .timeouts('implicit', config.timeout);
    };
  

  this.goToPostingPage = function() {
    client
        .click(this.post_button);
    };

  this.goToLoginPage = function() {
     client
        .click(this.myolx_logged_out);
    };


  this.logOut = function(){
    client
        .click(this.myolx_logged_in)
        .waitForVisible(this.logout_button)
        .click(this.logout_button);
    };

  this.isUserLoggedOut = function(){
      var user_logged_out = this.myolx_logged_out;
      client
          .isExisting(user_logged_out, function(err, isExisting) {
            expect(isExisting).to.equal(true);
      });
  };


  this.isUserLoggedIn = function(username, password) {
      var user_logged_in = this.myolx_logged_in;
      client
          .isExisting(user_logged_in, function(err, isExisting) {
            expect(isExisting).to.equal(true);
      });
  };



  this.goToChangeCity = function(){
     client
          .click(this.change_city_link);     
  };

  this.goToSelectCity = function(){
     client
          .click(this.select_city_link);     
  };

  this.isUserLocatedInCity = function() {
    var change_city = this.change_city_link;
    client
        .isExisting(change_city, function(err, isExisting) {
        expect(isExisting).to.equal(true);
    });
  };

  this.globalSearch = function(term){
    client
        .setValue(this.search_field, term)
        .click(this.search_button);
  };

}