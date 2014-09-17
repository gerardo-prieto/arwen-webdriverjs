'use strict';

var chai = require('chai');
var expect = chai.expect;
var config = require('../config');

module.exports = function(client, baseURL, platform) {
   if (platform != 'wap'){
       this.city_link = "li:nth-child(1) > [data-qa=city-name]"; 
   }
     else{
        this.city_link = "tr:nth-child(1) > * > [data-qa=city-name]";
     }  
   this.selectCity = function(number) {
   if(!number){
      client
          .click(this.city_link);
    }
     else {
      var city_link = this.city_link;
      var new_city_link = city_link.replace("1", number);
      client
          .click(new_city_link);  
    }
  };
}
