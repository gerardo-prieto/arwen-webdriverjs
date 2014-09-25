var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    webdriverjs = require('../index');

var config = require('../config');

var argv = require('optimist').demand('env').argv;
var baseURL = argv.env;
var platform = argv.platform;


describe('ARWEN Webdriverjs tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
//        client = webdriverjs.remote(config.capabilities[platform]);

        var webdriverjs = require('../index'),
        client = webdriverjs.remote({
            desiredCapabilities: {
                browserName: 'firefox',
                version: '30',
                platform: 'Windows 7',
                tags: ['examples'],
                name: 'Arwen baby!'
            },
            host: 'ondemand.saucelabs.com',
            port: 80,
            user: process.env.SAUCE_USERNAME,
            key: process.env.SAUCE_ACCESS_KEY,
            logLevel: 'silent'
        }).init(done);


//        client.init(done);
        pages = require('../pages')(client, baseURL, platform);
    });


    it('POST - Anonymous - No price - @wap @html4 @html5',function(done) {
        pages.Home.go();
        pages.Home.goToPostingPage();
        pages.Posting.selectCityCategoryAndSubcategory();
        pages.Posting.postWith("Title for testing", "Description for testing", "" , "Mark tester", "1231231231", "robot_test@olx.com");
        pages.AfterPosting.openAdLink();
        pages.AfterPosting.isItemDisplayed();
      //  client.end();
    });
/*
    it('POST - Anonymous - With price - @wap @html4 @html5 ', function(done) {
        pages.Home.go();
        pages.Home.goToPostingPage();
        pages.Posting.selectCityCategoryAndSubcategory(362,378);
        pages.Posting.postWith("Title for testing","Description for testing", "2000" , "Mark tester", "1231231231", "robotest@olx.com");
        pages.AfterPosting.openAdLink();
        pages.AfterPosting.isItemDisplayed();
        client.end();
     });


    it('POST - Logged In - No price - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.goToPostingPage();
        pages.Posting.selectCityCategoryAndSubcategory();
        pages.Posting.postWith("Title for testing","Description for testing", "" , "Mark tester", "1231231231", "robot_test@olx.com");
        pages.AfterPosting.openAdLink();
        pages.AfterPosting.isItemDisplayed();
        client.end();
    });


    it('POST - Logged In - With price - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.goToPostingPage();
        pages.Posting.selectCityCategoryAndSubcategory(362,378);
        pages.Posting.postWith("Title for testing","Description for testing", "2000" , "Mark tester", "1231231231", "robot_test@olx.com");
        pages.AfterPosting.openAdLink();
        pages.AfterPosting.isItemDisplayed();
        client.end();
    });



    it('LOGIN with valid user - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.isUserLoggedIn();
        client.end();
    });


    it('LOGOUT - Logout with valid user - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.logOut();
        pages.Home.isUserLoggedOut();
        client.end(); 
      });



    it('LOCATION - Select city - @wap @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToSelectCity();
        pages.Location.selectCity(1);
        pages.Home.isUserLocatedInCity();
        client.end();   
    });



    it('LOCATION - Change city - @wap @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToSelectCity();
        pages.Location.selectCity(1);
        pages.Home.isUserLocatedInCity();
        pages.Home.goToChangeCity();
        pages.Location.selectCity(2);
        pages.Home.isUserLocatedInCity();
        client.end();          
    });


    it('SEARCH - Logged In - Search and open Ad - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.globalSearch("a");
        pages.Listing.openItem();
        pages.Item.isItemDisplayed();
        client.end();
    });


    it('SEARCH - Anonymous - Search and open an Ad - @wap @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.globalSearch("a");
        pages.Listing.openItem();
        pages.Item.isItemDisplayed();
        client.end(); 
    });   
*/
/*

    it('ITEM PAGE - Anonymous - Reply an Ad - @wap @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.globalSearch("a");
        pages.Listing.openItem(1);
        pages.Reply.replyAnAdWith('Reply message for testing', 'robot', 'robotest@olx.com', '1231231231');
        pages.Reply.isConfirmationMessageDisplayed();
        client.call(done);  
      });


    it('ITEM PAGE - Logged in - Reply an Ad - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.globalSearch("a");
        pages.Listing.openItem(1);
        pages.Reply.replyAnAdWith('Reply message for testing', 'robot', 'robotest@olx.com', '1231231231');
        pages.Reply.isConfirmationMessageDisplayed();
        client.call(done);  
    });

*/
    it('ITEM PAGE - Add and Remove to Favorites - @html4 @html5', function(done) {
        pages.Home.go();
        pages.Home.goToLoginPage();
        pages.Login.logInWith('robotest@olx.com', 'robotpass');
        pages.Home.globalSearch("a");
        pages.Listing.openItem(1);
        pages.Item.addItemToFavorites();
     //   client.end();
    });

    after(function(done) {
        client.end(done);
    });
});
