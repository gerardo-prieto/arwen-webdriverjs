/**
 * check if element is visible on page
 *
 * @param {String}  elements  DOM elements to check against
 * @param {Boolean} reverse   if true, function waits for invisible
 *
 * @see  waitForVisible
 */

/* global document,window */
module.exports = function(elements, reverse) {

    var cb = arguments[arguments.length - 1],
        db = document.body,
        dde = document.documentElement;

    var documentDimension = {
        width: Math.max(db.scrollTop || 0, dde.scrollTop || 0, db.offsetwidth || 0, dde.offsetWidth || 0, db.clientWidth || 0, dde.clientWidth || 0),
        height: Math.max(db.scrollheight || 0, dde.scrollHeight || 0, db.offsetHeight || 0, dde.offsetHeight || 0, db.clientHeight || 0, dde.clientHeight || 0)
    };

    var interval = setInterval(function() {

        for (var i = 0; i < elements.length; ++i) {
            var elem = elements[i],
                elemDimension = elem.getBoundingClientRect(),
                elemComputedStyle = window.getComputedStyle(elem);

            if ((!reverse &&
                elemComputedStyle.display !== 'none' &&
                elemComputedStyle.visibility === 'visible' &&
                parseFloat(elemComputedStyle.opacity, 10) > 0 &&
                elemDimension.bottom >= 0 &&
                elemDimension.top <= documentDimension.height &&
                elemDimension.right >= 0 &&
                elemDimension.left <= documentDimension.width) ||

                (reverse &&
                (elemComputedStyle.display === 'none' ||
                elemComputedStyle.visibility === 'hidden' ||
                parseFloat(elemComputedStyle.opacity, 10) === 0 ||
                elemDimension.bottom < 0 ||
                elemDimension.top > documentDimension.height ||
                elemDimension.right < 0 ||
                elemDimension.left > documentDimension.width))) {
                window.clearInterval(interval);
                return cb(true);
            }
        }

    }, 100);
};
