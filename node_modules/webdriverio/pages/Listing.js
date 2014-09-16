'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
  if(platform != 'wap'){
    this.item_listing = "li:nth-child(1) > [data-qa=list-item]";
  }
    else{
      this.item_listing = "tr:nth-child(2) > * > [data-qa=list-item]";
    }
 
 this.openItem = function (number){
    if(!number){
      client
          .click(this.item_listing);
    }
      else {
        var locator = this.item_listing;
        if (platform != 'wap'){
          var new_locator = locator.replace("1", number);
        }
          else{
            var new_locator = locator.replace("2", number+1);
         }
        client
            .click(new_locator);  
    }
  };
}