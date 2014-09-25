'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
  this.city = "[data-qa=city-name]";
  this.category = "[data-qa=category-name][href*='posting/186']";
  this.subcategory = "[data-qa=subcategory-name][href*='posting/186/279']";   
  this.title = "[id=text-title]";
  this.description = "[id=text-description]";
  this.price = "[id=text-priceC]";
  this.contactName = "[id=text-contactName]";
  this.phone = "[id=text-phone]";
  this.email = "[id=text-email]";
  this.submitButton = "[data-qa=submit-button]";
 


  this.selectCityCategoryAndSubcategory = function(category , subcategory) {
    client
        .click(this.city);
    if(!category || !subcategory){
        client
            .click(this.category)
            .click(this.subcategory);
    }
      else {
        var category_locator = this.category;
        var subcategory_locator = this.subcategory
        var new_category = category_locator.replace("186", category);
        var new_subcategory = subcategory_locator.replace("186/279", category + "/" + subcategory);
        client
            .click(new_category)
            .click(new_subcategory);
      }
    };



  this.postWith = function(data) {
    client
        .setValue(this.title, data.title)
        .setValue(this.description, data.description);
    if (data.price){
      client
          .setValue(this.price, data.price);
    }
    client
        .setValue(this.contactName, data.contactName)
        .setValue(this.phone, data.phone)
        .setValue(this.email, data.email)
        .click(this.submitButton);
    };

}