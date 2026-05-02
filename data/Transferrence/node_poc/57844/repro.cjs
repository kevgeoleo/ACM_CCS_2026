const asyncHooks = require('async_hooks');
const http = require('http');
const finished = require('stream').finished;
const assert = require('assert');

const asyncLocalStorage = new asyncHooks.AsyncLocalStorage();
const store = { foo: 'bar' };

const server = http.createServer(function (req, res) {
  asyncLocalStorage.run(store, function () {
    finished(res, function () {
      const value = asyncLocalStorage.getStore()?.foo;
      console.log('Value inside finished callback:', value);
      try {
        assert.strictEqual(value, 'bar');
        console.log('ASSERTION PASSED');
      } catch (err) {
        console.error('ASSERTION FAILED:', err.message);
      }
    });
  });

  // Trigger response end asynchronously
  setTimeout(res.end.bind(res), 0);

}).listen(0, function () {
  const port = this.address().port;
  http.get('http://127.0.0.1:' + port, function onResponse(res) {
    res.resume();
    res.on('end', server.close.bind(server));
  });
});
