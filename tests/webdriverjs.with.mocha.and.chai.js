var chai        = require('../node_modules/chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    webdriverjs = require('../node_modules/webdriverio/index');

var config = require('../config');

var argv = require('optimist').demand('env').argv;
var baseURL = argv.env;
var platform = argv.platform;

describe('my webdriverjs tests', function(){
    var pages;
    this.timeout(99999999);
    var client = {};

    before(function(done){
            client = webdriverjs.remote({ desiredCapabilities: {browserName: 'firefox'} });
            client.init(done);
            pages = require('../pages')(client, baseURL, platform);
    });
/*
    it('Github test',function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                assert.equal(null, err);
                assert.strictEqual(result.height , 32);
                assert.strictEqual(result.width, 89);
            })
            .getTitle(function(err, title)c {
                assert.equal(null, err);
                assert.strictEqual(title,'GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, result){
                assert.equal(null, err);
                assert.strictEqual(result, 'rgba(65,131,196,1)');
            })
            .call(done);
    });

*/

    it('POST - Anonymous - No price - @wap @html4 @html5', function(done) {
        pages.Home.go();



/*
        pages.Home.goToPostingPage();
        pages.Posting.selectCityCategoryAndSubcategory();
        pages.Posting.postWith("Title for testing", "Description for testing", "" , "Mark tester", "1231231231", "robotest@olx.com");
        pages.AfterPosting.openAdLink();
        pages.AfterPosting.isItemDisplayed("Title for testing");
*/
    });

    after(function(done) {
       client.end(done);
    });
});
