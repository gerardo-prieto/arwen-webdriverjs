'use strict';

module.exports = {
    timeout: 70000,
    capabilities: {
        wap: {   
                desiredCapabilities: {
                browserName : 'firefox' ,
                logLevel: 'silent',
                'phantomjs.page.customHeaders.User-Agent' : 'WAP',
         //       'phantomjs.page.customHeaders.x-origin-olx' : 'testing'
                }
        },
        html4: {
                desiredCapabilities: {
                browserName : 'firefox' ,
                logLevel: 'silent',
                'phantomjs.page.customHeaders.User-Agent' : 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16',
              //  'phantomjs.page.customHeaders.x-origin-olx' : 'testing'
                }
        },
        html5: {
                desiredCapabilities: {
                browserName : 'firefox' ,
                logLevel: 'silent',
                'phantomjs.page.customHeaders.User-Agent' : 'Mozilla/5.0 (Linux; U; Android 4.1; xx-xx; GT-I9082 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
             //   'phantomjs.page.customHeaders.x-origin-olx' : 'testing'
                }
        }
    }
};  