var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var path = require('path');
var IniParser = require('iniparserjs');
var config = new IniParser(path.join(__dirname, 'test.ini'), 'UTF8');
console.log({}.polluted);