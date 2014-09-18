'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
    this.ad_link = "[data-qa=posted-ad-link]";

  this.openAdLink = function() {
      client
          .click(this.ad_link);
    };

  this.isItemDisplayed = function(){
      var item_page_element = "[data-qa=item]"
      client
          .isExisting(item_page_element, function(err, isExisting) {
            expect(isExisting).to.equal(true);
          });
    };
}