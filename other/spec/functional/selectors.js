var findStrategy = require('../../../lib/helpers/find-element-strategy');
assert = require('assert');

describe('selector strategies helper', function () {

    it('should find an element using "css selector" method',function() {

        var element = findStrategy(['.red']);
        assert.strictEqual(element.using, 'css selector');
        assert.strictEqual(element.value, '.red');

    });

    it('should find an element using "id" method',function() {

        var element = findStrategy(['#purplebox']);
        assert.strictEqual(element.using, 'id');
        assert.strictEqual(element.value, 'purplebox');

    });

    it('should find an element using "name" method',function() {

        var element = findStrategy(['[name="searchinput"]']);
        assert.strictEqual(element.using, 'name');
        assert.strictEqual(element.value, 'searchinput');

    });

    it('should find an element using "link text" method',function() {

        var element = findStrategy(['=GitHub Repo']);
        assert.strictEqual(element.using, 'link text');
        assert.strictEqual(element.value, 'GitHub Repo');

    });

    it('should find an element using "partial link text" method',function() {

        var element = findStrategy(['*=new']);
        assert.strictEqual(element.using, 'partial link text');
        assert.strictEqual(element.value, 'new');

    });

    it('should find an element using "tag name" method and tag format <XXX />',function() {

        var element = findStrategy(['<textarea />']);
        assert.strictEqual(element.using, 'tag name');
        assert.strictEqual(element.value, 'textarea');

    });

    it('should find an element using "tag name" method and tag format <XXX>',function() {

        var element = findStrategy(['<textarea>']);
        assert.strictEqual(element.using, 'tag name');
        assert.strictEqual(element.value, 'textarea');

    });

    it('should find an element using "xpath" method',function() {

        var element = findStrategy(['//html/body/section/div[6]/div/span']);
        assert.strictEqual(element.using, 'xpath');
        assert.strictEqual(element.value, '//html/body/section/div[6]/div/span');

    });

    it('should find an element using "xpath" method for ParenthesizedExpressions', function() {

        var element = findStrategy(['(//div)[7]/span']);
        assert.strictEqual(element.using, 'xpath');
        assert.strictEqual(element.value, '(//div)[7]/span');

    });

    // check if it is still backwards compatible for obsolete command
    it('should find an element by defining custom strategy',function() {

        var element = findStrategy(['my special strategy', '#.some [weird] selector', function(){}]);
        assert.strictEqual(element.using, 'my special strategy');
        assert.strictEqual(element.value, '#.some [weird] selector');

    });

});
