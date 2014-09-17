/**
 * check if element is enabled
 *
 * @param {String}  elements  DOM elements to check against
 * @param {Boolean} reverse   if true, function waits until element is disabled
 *
 * @see  waitForVisible
 */

/* global document,window */
module.exports = function(elements, reverse) {

    var cb = arguments[arguments.length - 1];
    var interval = setInterval(function() {

        for (var i = 0; i < elements.length; ++i) {
            var elem = elements[i];

            if ((!reverse && typeof elem.disabled === 'boolean' && !elem.disabled) ||
                ( reverse && typeof elem.disabled === 'boolean' &&  elem.disabled)) {
                window.clearInterval(interval);
                return cb(true);
            }
        }

    }, 100);
};