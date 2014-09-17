'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
  if(platform == 'html4'){
    this.remove_favorite = "[data-qa=remove-favorite]"; 
    this.add_favorite = "[data-qa=add-favorite]";
  }
    else{
      this.remove_favorite = "[class*='fav'][class*='remove']"; 
      this.add_favorite = "[class*='fav'][class*='add']";
    }


  this.addItemToFavorites = function(){
    var remove_favorite = this.remove_favorite;
    var add_favorite = this.add_favorite;
    client
        .isExisting(remove_favorite, function(err, isExisting) {
        if (isExisting){
          client
              .click(remove_favorite);
          }
        })
        .click(add_favorite)
        .isExisting(remove_favorite, function(err, isExisting) {
            expect(isExisting).to.equal(true);
        });
  };


  this.isItemDisplayed = function(){
      var item_page_element = "[data-qa=item]";
      client
          .isExisting(item_page_element, function(err, isExisting) {
            expect(isExisting).to.equal(true);
      });
  };       
}