var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const fs = require('fs');
const path = require('path');
const ION = require('ion-parser');
let obj = {};
console.log({}.polluted);
ION.parse(fs.readFileSync(path.resolve(__dirname, './payload.toml'), 'utf-8'));
console.log({}.polluted);