# Hakuna Matata...? Cross-Runtime Vulnerabilities, Inconsistencies, and Fragile Fixes in JavaScript Ecosystems

## Cross runtime and Regression issues reported

| Original Issue | Original Issue runtime | Reported to | Version         | Bug type      | Bug title                                                                                                                               | Bug URL  | Submission Date | Resolved Date | Status                | Labels                  | Confirmed |
| -------------- | ---------------------- | ----------- | --------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------- | ------------- | --------------------- | ----------------------- | --------- |
| redacted       | Node                   | Bun         | 1.3.9           | Cross runtime | CJS require() of failing ESM produces uninitialized exports on import()                                                                 | redacted | 20-02-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.10          | Cross runtime | Bun does not support module.registerHooks                                                                                               | redacted | 23-02-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.6.10          | Cross runtime | CJS require() of throwing ESM module is not synchronous (Node compatibility mismatch)                                                   | redacted | 23-02-2026      | 27-02-2026    | Closed                | Bug, node:compat        | ✓         |
| redacted       | Node                   | Bun         | 1.3.10          | Cross runtime | node:test async tests exceeding 5s timeout fail in Bun but pass in Node                                                                 | redacted | 25-02-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.10          | Cross runtime | .cjs file using import.meta does not throw in Bun (Node incompatible)                                                                   | redacted | 25-02-2026      | 01-03-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.6.10          | Cross runtime | node:test top-level await test() pattern fails in Deno                                                                                  | redacted | 25-02-2026      |               | Open                  | node compat, bug        | ✓         |
| redacted       | Node                   | Bun         | 1.3.10          | Cross runtime | AsyncLocalStorage context is not preserved inside stream.finished callback                                                              | redacted | 25-02-2026      | 26-02-2026    | Closed as completed   | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.6.10          | Cross runtime | AsyncLocalStorage context is not preserved inside stream.finished callback                                                              | redacted | 25-02-2026      | 02-03-2026    | Closed as completed   | node compat, bug        | ✓         |
| redacted       | Node                   | Node        | 24.13.1         | Regression    | Regression bug: AbortSignal.any() causing memory leak on long lived parent signal                                                       | redacted | 21-03-2026      | 02-04-2026    | Closed as completed   | abortcontroller         | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | console.log throws TypeError on circular structures when Symbol.toStringTag getter throws (quick-lru)                                   | redacted | 21-03-2026      | 23-03-2026    | Closed                | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | Buffer.concat truncates buffers larger than 4GB                                                                                         | redacted | 21-03-2026      | 23-03-2026    | Closed                | bug, node compat        | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | AbortSignal.any() causing memory leak on long lived parent signal                                                                       | redacted | 21-03-2026      | 23-03-2026    | Closed as completed   | bug, web                | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | structuredClone serializing a non-serializable object                                                                                   | redacted | 22-03-2026      |               | Open                  | bug, ext/web            | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | fs.glob does not support options.withFileTypes yet.                                                                                     | redacted | 22-03-2026      | 26-03-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | process.setUncaughtExceptionCaptureCallback not implemented                                                                             | redacted | 22-03-2026      | 23-03-2026    | Closed                | bug, node compat        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | [streams] Uncatchable error when piping object-mode source into byte-mode destination                                                   | redacted | 22-03-2026      | 23-03-2026    | Closed                | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | structuredClone with transferable ReadableStream throws DataCloneError                                                                  | redacted | 22-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | in operator in vm.runInContext does not see prototype properties                                                                        | redacted | 22-03-2026      |               | Open                  | bug, node compat        | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | env-file: inner quotes and escaped newlines not parsed correctly                                                                        | redacted | 23-03-2026      | 25-03-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | test.run not implemented in Deno                                                                                                        | redacted | 23-03-2026      |               | Open                  | bug, node compat        | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | util.stripVTControlCharacters does not remove OSC 8 hyperlinks                                                                          | redacted | 23-03-2026      | 25-03-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | fs.watch misses change event for immediate write after watcher setup                                                                    | redacted | 23-03-2026      | 01-04-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | worker_threads + inspector.Session Profiler.stop returns null profile in Bun                                                            | redacted | 23-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | repl.start not implemented in Bun                                                                                                       | redacted | 23-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | node:http2: HTTP/2 client connection hangs (no response/end events)                                                                     | redacted | 23-03-2026      | 17-04-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Node                   | Bun         | 1.2.23          | Cross runtime | loadEnvFile from node:process not working in Bun                                                                                        | redacted | 07-10-2025      |               | Open                  | node:process            | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | import() silently swallows errors from nested module imports (data URL case)                                                            | redacted | 23-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | node:test: assertion failures inside async callback (done-style test) are ignored and test incorrectly passes                           | redacted | 24-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | node:test: async errors in callback-style tests are not attributed to the test and cause global uncaught failure                        | redacted | 24-03-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Importing unsupported attributes should throw [ERR_IMPORT_ATTRIBUTE_UNSUPPORTED]                                                        | redacted | 24-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | MockTimers not implemented in Deno                                                                                                      | redacted | 25-03-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Node                   | Deno        | 2.7.7           | Cross runtime | node:test/reporters not implemented in Deno                                                                                             | redacted | 25-03-2026      | 25-03-2026    | Closed as duplicate   |                         | ✓         |
| redacted       | Node                   | Node        | 24.13.1         | Regression    | OOM Error When Creating Many ShadowRealms with Heap Snapshots in Node.js                                                                | redacted | 25-03-2026      |               | Open                  |                         |           |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Bun does not show coverage info when using node:test with --coverage option                                                             | redacted | 28-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | pathToFileURL mishandles Windows UNC extended-length paths on Linux                                                                     | redacted | 28-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | node:http.createServer does not trigger HPE_HEADER_OVERFLOW for oversized headers                                                       | redacted | 29-03-2026      | 17-04-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | http.createServer destroys socket instead of sending 431 response                                                                       | redacted | 29-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | worker_threads behavior different from node                                                                                             | redacted | 29-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | worker_threads behavior different from node                                                                                             | redacted | 29-03-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | fs.readFile does invoke the callback with an Error, but the .stack property is missing on the async error                               | redacted | 29-03-2026      | 02-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | http.get throws Error: Not implemented:                                                                                                 | redacted | 29-03-2026      | 17-04-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | assert.deepStrictEqual incorrectly fails for Proxy-wrapped arrays                                                                       | redacted | 29-03-2026      | 02-04-2026    | Closed as duplicate   |                         | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Bun crashes when worker throws inside uncaughtException handler (worker_threads)                                                        | redacted | 29-03-2026      | 18-04-2026    | Closed as completed   | crash                   | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | http2.createSecureServer throws error due to missing setupConnectionsTracking                                                           | redacted | 30-03-2026      | 18-04-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | http2.createSecureServer({ allowHTTP1: true }) returns empty response over HTTPS                                                        | redacted | 30-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | http2.createSecureServer gives empty response                                                                                           | redacted | 30-03-2026      | 18-04-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Assigning a hostname with port 80 to URL.host will not override the existing port                                                       | redacted | 30-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Bun does not handle process.\_fatalException inside a domain                                                                            | redacted | 30-03-2026      | 03-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Bun does not throw when using invalid Syntax within vm.Script                                                                           | redacted | 30-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | process.send() message may be lost if process.exit() is called immediately (flaky test)                                                 | redacted | 30-03-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Bun does not support aes-128-ecb even though its in list of supported ciphers                                                           | redacted | 30-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | fs.readFileSync returns 0-length buffer for sparse files                                                                                | redacted | 30-03-2026      | 08-04-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Node                   | Node        | 24.13.1, 25.8.1 | Regression    | Passing large value for mode option in fs.createWriteStream results in crash                                                            | redacted | 30-03-2026      |               | Open                  | fs                      | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | req.socket.bytesRead is undefined in node:http server                                                                                   | redacted | 31-03-2026      | 17-04-2026    | Closed as completed   | node compat, bug        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | req.socket.bytesRead returns 0 when using node:http server                                                                              | redacted | 31-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | HTTP/2 server push streams disabled in Bun                                                                                              | redacted | 31-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | http2.connect fails with IP address due to certificate verification (UNABLE_TO_VERIFY_LEAF_SIGNATURE)                                   | redacted | 31-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | process.argv[0] does not return path to executable in Deno                                                                              | redacted | 31-03-2026      | 31-03-2026    | Closed as completed   |                         | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | crypto.createCipheriv().update does not throw on large input (2\*\*31 - 1)                                                              | redacted | 31-03-2026      | 08-04-2026    | Open                  | node compat, bug        | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | fs.watch with recursive:true does not trigger events in node:fs                                                                         | redacted | 31-03-2026      |               | Open                  | node compat, bug        | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | fs.watch throws uncatchable error when given non-existent file as parameter                                                             | redacted | 31-03-2026      |               | Open                  | node compat, bug        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Error.captureStackTrace returns truncated stack trace                                                                                   | redacted | 31-03-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | Error importing ES module with an encoded comma in the URL                                                                              | redacted | 01-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | bun run prints help instead of executing .cjs scripts that use child_process.spawn                                                      | redacted | 01-04-2026      | 05-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | [http] Request hangs after 100-continue response in Bun                                                                                 | redacted | 01-04-2026      | 05-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | tty.ReadStream throws Error                                                                                                             | redacted | 01-04-2026      | 01-04-2026    | Closed                | node compat, bug        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | url.format() in Bun does not decode auth credentials correctly after url.parse()                                                        | redacted | 01-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | AbortSignal.timeout() + util.aborted() causes unbounded memory growth                                                                   | redacted | 01-04-2026      | 14-04-2026    | Closed                | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | AbortSignal.timeout() + util.aborted() causes unbounded memory growth                                                                   | redacted | 01-04-2026      |               | Open                  |                         | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | cluster.send() loses socket handle when sending large messages                                                                          | redacted | 01-04-2026      | 05-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | assert.deepEqual / deepStrictEqual does not throw for unequal Sets                                                                      | redacted | 01-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.9           | Cross runtime | HTTP server hangs on malformed chunked request (incomplete chunk not rejected)                                                          | redacted | 02-04-2026      | 17-04-2026    | Closed                | node compat, bug        | ✓         |
| redacted       | Node                   | Bun         | 1.3.11          | Cross runtime | HTTP server hangs on malformed chunked request (incomplete chunk not rejected)                                                          | redacted | 02-04-2026      | 05-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Worker accepts invalid file:// URL instead of throwing an error                                                                         | redacted | 04-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | pyodide.mjs throws Cannot determine runtime environment when run under Bun, even though it works in Node                                | redacted | 04-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | fs.rmSync returns EFAULT instead of EISDIR when removing a directory without recursive                                                  | redacted | 07-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Node        | 24.13.1         | Cross runtime | fs.readSync does not validate invalid position type (accepts object instead of throwing)                                                | redacted | 08-04-2026      | 15-04-2026    | Closed                | fs                      | ✓         |
| redacted       | Deno                   | Deno        | 2.7.11          | Regression    | ChildProcess.kill() does not indicate failure when process has already exited                                                           | redacted | 08-04-2026      | 18-04-2026    | Closed                | node compat, bug        | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | ChildProcess.kill() does not indicate failure when process has already exited                                                           | redacted | 08-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | fs.readSync does not validate invalid position type (accepts object instead of throwing)                                                | redacted | 08-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | tty.WriteStream.prototype.isTTY missing                                                                                                 | redacted | 08-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Deno        | 2.7.11          | Regression    | Deno.customInspect is not respected by console.log("%o", value)                                                                         | redacted | 08-04-2026      |               | Open                  |                         |           |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | MessagePort missing removeListener method (Node.js EventEmitter incompatibility)                                                        | redacted | 08-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | assert.deepStrictEqual ignores prototype differences                                                                                    | redacted | 08-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Worker error event ignores preventDefault() and still terminates                                                                        | redacted | 08-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | os.freemem() returns inconsistent values vs Node                                                                                        | redacted | 09-04-2026      | 10-04-2026    | Closed                | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | node:http2.createServer fails for h2c (cleartext HTTP/2)                                                                                | redacted | 09-04-2026      | 18-04-2026    | Closed                | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Response([1,2,3]).text() produces incorrect output ("123" instead of "1,2,3")                                                           | redacted | 09-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Worker.terminate() in Bun behaviorally different from Node                                                                              | redacted | 09-04-2026      | 13-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Bun throws Error instead of AggregateError on Promise.reject within Promise.any                                                         | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Bun accepts TypeScript syntax (export enum) in data:application/javascript modules instead of throwing SyntaxError                      | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | fetch().body.getReader({ mode: "byob" }) throws instead of supporting Web Streams BYOB reader                                           | redacted | 03-11-1979      |               | Closed as duplicate   | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Bun process does not exit after Tinypool destroy() completes (worker threads remain alive)                                              | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Inconsistent validation of percent-encoded file URLs compared to Node.js                                                                | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Deno        | 2.7.11          | Regression    | nodejs-polars give different output in Deno compared to Node                                                                            | redacted | 11-04-2026      | 16-04-2026    | Open                  | node compat             | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Very slow console.log on large sparse arrays compared to Node and Deno                                                                  | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Deno        | 2.7.11          | Regression    | fs.readFile() on non-terminating sources never settles and can consume unbounded memory.                                                | redacted | 11-04-2026      |               | Open                  | node compat, bug        | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | fs.readFile() on non-terminating sources never settles and can consume unbounded memory.                                                | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Worker: self.close() is not defined                                                                                                     | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Deno        | 2.7.11          | Regression    | deno lint errors on process global                                                                                                      | redacted | 11-04-2026      |               | Open                  |                         |           |
| redacted       | Deno                   | Deno        | 2.7.11          | Regression    | Client network socket disconnected before secure TLS connection was established                                                         | redacted | 11-04-2026      | 17-04-2026    | Closed                | node compat, bug        | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | signal-exit onExit callback not triggered in Bun during process shutdown                                                                | redacted | 11-04-2026      | 15-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | fetch() does not throw when invalid values are passed                                                                                   | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Decorators on accessor class fields fail to parse in Bun                                                                                | redacted | 11-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Emscripten pthread-based WASM module fails to initialize in Bun while working in Node                                                   | redacted | 12-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Bun does not emit ServerResponse "close" event on client disconnect during active HTTP response                                         | redacted | 12-04-2026      | 16-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Dynamic import resolves before module evaluation completes when using top-level await                                                   | redacted | 12-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Crash: ffi-napi call triggers unsupported libuv function (uv_thread_self) and aborts Bun                                                | redacted | 12-04-2026      |               | crash                 | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | ReadableStreamBYOBReader from node:stream/web is not a native class in Bun                                                              | redacted | 12-04-2026      | 15-04-2026    | Closed                | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.3.11          | Cross runtime | Inconsistent IP version preference in Bun node:dns.lookup                                                                               | redacted | 12-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | Deno does not detect MongoMemoryServer export in npm:mongodb-memory-server                                                              | redacted | 13-04-2026      |               | Open                  | node resolution, bug    | ✓         |
| redacted       | Bun                    | Bun         | 1.3.11          | Regression    | npm package jsdoc throws error in Bun but not in Node                                                                                   | redacted | 13-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | npm package jsdoc throws error in Deno but not in Node                                                                                  | redacted | 13-04-2026      | 15-04-2026    | Closed                | node compat, bug        | ✓         |
| redacted       | Bun                    | Bun         | 1.3.11          | Regression    | File.type incorrectly appends charset parameter (e.g. "text/plain;charset=utf-8")                                                       | redacted | 13-04-2026      | 17-04-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Bun                    | Bun         | 1.3.11          | Regression    | Bun crashes when loading ffi-napi due to missing libuv support (uv_thread_self)                                                         | redacted | 13-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:crypto Hash.digest() throws ERR_CRYPTO_HASH_FINALIZED after stream.pipeline                                                        | redacted | 13-04-2026      |               | Open                  | node compat, bug        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:http Server does not inherit from node:net Server (instanceof mismatch vs Node.js)                                                 | redacted | 15-04-2026      | 17-04-2026    | Open                  | node compat, bug        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | crypto.verify throws Invalid PEM error on Deno                                                                                          | redacted | 16-04-2026      | 18-04-2026    | Closed                | node compat, bug        | ✓         |
| redacted       | Bun                    | Bun         | 1.3.11          | Regression    | crypto.verify throws Invalid PEM error on Bun                                                                                           | redacted | 16-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | spawnSync does not support Node-style FD-indexed stdio inheritance                                                                      | redacted | 21-04-2026      |               | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | nats npm package fails under Deno runtime with timeout during connection establishment                                                  | redacted | 21-04-2026      | 21-04-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:tls server does not correctly negotiate ALPN via ALPNCallback (returns false instead of selected protocol)                         | redacted | 21-04-2026      |               | Open                  | bug, node compat        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | Deno node:crypto incompatibility: createPublicKey fails on valid DER SPKI accepted by Node.js                                           | redacted | 21-04-2026      |               | Open                  |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.3.13          | Regression    | node:crypto createPublicKey rejects DER SPKI accepted by Node.js                                                                        | redacted | 21-04-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | Request.credentials is undefined instead of "same-origin"                                                                               | redacted | 21-04-2026      |               | Open                  |                         |           |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:https: server.addContext is missing on https.createServer() instances                                                              | redacted | 22-04-2026      | 22-04-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:http: crash during WebSocket handshake instead of propagating 401 error (ethers WebSocketProvider)                                 | redacted | 22-04-2026      | 22-04-2026    | Closed as completed   | bug, node compat        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:https: getPeerCertificate() returns empty object despite authorized === true                                                       | redacted | 22-04-2026      |               | Open                  |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:child_process: fd 3 pipe broken in spawn()                                                                                         | redacted | 22-04-2026      |               | Open                  |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | MessagePort.on('message') does not deduplicate listeners unlike Node.js worker_threads                                                  | redacted | 22-04-2026      |               | Open                  |                         |           |
| redacted       | Bun                    | Bun         | 1.3.13          | Regression    | Bun crashes when a NAPI module (@roamhq/wrtc via libuv) calls uv_async_init                                                             | redacted | 22-04-2026      | 22-04-2026    | Closed as duplicate   | crash                   | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | process.on('SIGINT') handler receives undefined instead of signal name                                                                  | redacted | 23-04-2026      |               |                       |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | Overriding globalThis.postMessage in Worker causes recursive call stack overflow in Deno Node worker_threads compatibility layer        | redacted | 23-04-2026      |               |                       |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.3.13          | Regression    | z3-solver behavior different from Node                                                                                                  | redacted | 23-04-2026      | 23-04-2026    | Closed as duplicate   |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | Deno structuredClone incorrectly serializes File and Blob as empty objects                                                              | redacted | 23-04-2026      |               |                       |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.3.13          | Regression    | structuredClone returns File and Blob as “detached” objects instead of fully usable clones                                              | redacted | 23-04-2026      |               |                       |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:crypto.publicEncrypt does not validate invalid oaepHash (should throw like Node.js)                                                | redacted | 23-04-2026      | 24-04-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | node:vm.runInThisContext allows dynamic import() without importModuleDynamically callback                                               | redacted | 23-04-2026      |               |                       | node compat, bug        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | process EPIPE error event not emitted                                                                                                   | redacted | 23-04-2026      |               |                       | node compat, bug        | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | Deno: Request.body.getReader({ mode: "byob" }) fails for Node IncomingMessage streams                                                   | redacted | 23-04-2026      |               |                       |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | fs.watch with recursive: true: inconsistent filename (basename vs relative path)                                                        | redacted | 24-04-2026      |               |                       |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.3.13          | Regression    | fs.watch with recursive: true: inconsistent filename (basename vs relative path)                                                        | redacted | 24-04-2026      |               |                       | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.7.12          | Cross runtime | npm:elkjs: Worker instantiation fails in Deno (\_Worker is not a constructor)                                                           | redacted | 24-04-2026      |               |                       |                         | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | fs.readdir({ withFileTypes: true, encoding: 'buffer' }) returns Uint8Array[] instead of Dirent[]                                        | redacted | 11-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | fs.readdir({ withFileTypes: true, encoding: 'buffer' }) returns string names instead of Buffer names                                    | redacted | 11-05-2026      | 13-05-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | tls: Server.setTicketKeys not implemented in Deno                                                                                       | redacted | 11-05-2026      |               | Open                  | tls                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | tls: Server.setTicketKeys not implemented in Deno                                                                                       | redacted | 11-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | Rethrowing inside process.on('uncaughtException') loses original Error stack                                                            | redacted | 11-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | createHistogram missing from node:perf_hooks exports                                                                                    | redacted | 12-05-2026      | 15-05-2026    | Closed as completed   |                         | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | process.send() never returns false under IPC backpressure                                                                               | redacted | 12-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | http.ServerResponse emits both "finish" and "close" after aborted request                                                               | redacted | 12-05-2026      | 14-05-2026    | Closed as completed   | node:http, bug          | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | http.ServerResponse emits neither "finish" nor "close" after aborted request                                                            | redacted | 12-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | domain does not catch exceptions thrown inside setTimeout() callbacks                                                                   | redacted | 14-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | Buffer(number) with large numeric argument causes panic in Deno                                                                         | redacted | 14-05-2026      | 17-05-2026    | Closed as completed   | node compat, panic      | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | WebCrypto P-521 SPKI export incompatible with Node.js for compressed EC keys                                                            | redacted | 14-05-2026      | 17-05-2026    | Closed as completed   | ext/crypto, bug         |           |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | child_process.spawnSync() hangs indefinitely when stdout exceeds max buffer                                                             | redacted | 14-05-2026      | 08-06-2026    | Closed as completed   | node compat, bug        | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | HTTP server throughput significantly lower than Node.js under high concurrency load                                                     | redacted | 14-05-2026      |               | Open                  | ext/http                | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | async_hooks before() callback does not fire for Promise created before hook enable()                                                    | redacted | 14-05-2026      |               | Open                  |                         |           |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | net.connect() fails with "DEFAULT_IPV6_ADDR is not defined" when using IPv6-mapped IPv4 address                                         | redacted | 14-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | process.nextTick() ordering differs from Node.js with Promise microtasks and queueMicrotask                                             | redacted | 14-05-2026      | 15-05-2026    | Closed as completed   | node compat, bug        | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | node:net invalid fd handling triggers panic in signal-hook                                                                              | redacted | 14-05-2026      |               | Open                  | node compat, panic, bug | ✓         |
| redacted       | Node                   | Node        | 24.13.1         | Regression    | net.Socket({ fd }) can abort the Node.js process when iterating invalid file descriptors                                                | redacted | 14-05-2026      |               | Open                  |                         |           |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | async_hooks.destroy not emitted after clearImmediate() unlike Node.js                                                                   | redacted | 15-05-2026      | 15-05-2026    | Closed as completed   |                         | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | async_hooks.createHook does not emit lifecycle events in Bun for timers/Immediate                                                       | redacted | 15-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | createECDH('secp256k1') fails in Bun with ERR_CRYPTO_OPERATION_FAILED (works in Node)                                                   | redacted | 15-05-2026      | 16-05-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | child_process.spawn stdio piping between processes fails in Bun with "TODO: stream.Readable stdio" error                                | redacted | 15-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | Readable async iterator resolves instead of rejecting when stream.destroy() is called during iteration                                  | redacted | 17-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | Deno panics when repeatedly creating VM contexts and executing scripts in a loop                                                        | redacted | 17-05-2026      | 17-05-2026    | Closed as completed   |                         | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | Deno throws TypeError on process exit when calling process.\_getActiveHandles() in 'exit' event                                         | redacted | 17-05-2026      | 17-05-2026    | Closed as completed   |                         | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | Object.freeze(process) causes Deno to throw during shutdown (Cannot assign to read only property '\_exiting') while Node exits cleanly  | redacted | 17-05-2026      |               | Open                  |                         |           |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | switch-case const causes incorrect TDZ behavior / lexical scope leakage                                                                 | redacted | 17-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | process.beforeExit event is not emitted during normal shutdown                                                                          | redacted | 17-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | async_hooks + process.\_fatalException: loss of function name and async context in TAP subtest errors                                   | redacted | 17-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | stream/web TransformStream + Node Transform.fromWeb causes internal webstreams_adapters crash (this is not an object)                   | redacted | 17-05-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Node                   | Deno        | 2.7.14          | Cross runtime | tls.connect: rejectUnauthorized=false does not allow self-signed TLS handshake to complete (ECONNRESET)                                 | redacted | 17-05-2026      | 26-05-2026    | Closed as completed   |                         |           |
| redacted       | Node                   | Bun         | 1.3.14          | Cross runtime | http2 pushStream throws synchronously instead of returning error in callback                                                            | redacted | 17-05-2026      | 21-05-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | fetch() does not enforce Fetch Standard blocked-port list (e.g. port 6000) in Deno                                                      | redacted | 01-06-2026      | 01-06-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | child_process.exec(): destroying child.stdout does not cause stdout write failure like Node.js                                          | redacted | 02-06-2026      | 02-06-2026    | Closed as not planned |                         |           |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | @sap/hana-client native addon fails to load: undefined symbol uv_cond_init                                                              | redacted | 02-06-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | Node native addon fails to load in Deno with unresolved symbol error (node_module_register)                                             | redacted | 02-06-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | Deno fetch does not respect HTTP_PROXY / HTTPS_PROXY environment variables (Node compatibility mismatch)                                | redacted | 02-06-2026      |               | Open                  |                         |           |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | JSZip + Node stream adapter performs significantly slower in Bun than Node under identical workload                                     | redacted | 03-06-2026      | 06-06-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | Node compatibility divergence: dns.lookup('localhost') and net.Server.listen() resolve IPv4 vs IPv6 differently in Deno vs Node         | redacted | 03-06-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | Inconsistent or misleading documentation around maxHeaderSize CLI configurability (--max-http-header-size) in Deno Node compatibility   | redacted | 03-06-2026      |               | Open                  | node compat             | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | Differences in child_process.spawnSync return shape and error normalization between Node.js and Bun                                     | redacted | 03-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | node.lookup(undefined, cb) throws in Deno instead of following Node.js compatibility behavior                                           | redacted | 03-06-2026      | 05-06-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | Bun throws error on importing runMain from node:module                                                                                  | redacted | 03-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | Deno throws error on importing runMain from node:module                                                                                 | redacted | 03-06-2026      | 10-06-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | PM2 CLI crashes under Deno with TypeError: this.set is not a function                                                                   | redacted | 03-06-2026      | 04-06-2026    | Closed as duplicate   |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | console.log('%i', array) produces NaN instead of Node-compatible output                                                                 | redacted | 03-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | Deno node:test does not fail tests on unhandled promise rejections                                                                      | redacted | 03-06-2026      | 18-06-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | Bun ignores tunnel.httpsOverHttp() and does not emit HTTP CONNECT proxy requests (Node mismatch)                                        | redacted | 04-06-2026      | 07-06-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | Bun’s setImmediate() return value does not expose Node’s Immediate.\_onImmediate internal field                                         | redacted | 04-06-2026      | 07-06-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | BroadcastChannel fails to deserialize SharedArrayBuffer in worker context (RangeError: could not deserialize value)                     | redacted | 04-06-2026      | 06-06-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | crypto module property access throws ERR_INVALID_THIS when enumerated (breaks Bluebird promisifyAll)                                    | redacted | 04-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | node:dgram UDP6 addMembership() rejects scoped IPv6 interface ("::%12") with EINVAL while Node.js accepts it                            | redacted | 04-06-2026      | 05-06-2026    | Closed as completed   |                         | ✓         |
| redacted       | Bun                    | Deno        | 2.8.1           | Cross runtime | node:fs opendir async iterator allows use-after-close without throwing ERR_DIR_CLOSED                                                   | redacted | 05-06-2026      | 07-06-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | node:fs opendir async iterator allows use-after-close without throwing ERR_DIR_CLOSED                                                   | redacted | 05-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Bun                    | Deno        | 2.8.2           | Cross runtime | node:url format() drops authentication credentials when passed a WHATWG URL object                                                      | redacted | 05-06-2026      | 06-06-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Bun                    | Bun         | 1.4.0           | Regression    | Node.js dns.lookup compatibility mismatch: Bun returns DNSException (ESERVFAIL) instead of Node-style Error (EAI_AGAIN)                 | redacted | 05-06-2026      |               | Open                  | bug                     |           |
| redacted       | Bun                    | Deno        | 2.8.2           | Cross runtime | string_decoder produces different UTF-8 output than Node.js for identical Buffer input                                                  | redacted | 05-06-2026      | 06-06-2026    | Closed as completed   | node compat             | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Bun panics with cannot resolve DirInfo for non-absolute path: C:/ during import.meta.resolve()                                          | redacted | 09-06-2026      |               | Open                  | crash                   | ✓         |
| redacted       | Deno                   | Deno        | 2.8.3           | Regression    | node:dns Resolver.setServers(['127.0.0.1']) returns ETIMEOUT instead of ECONNREFUSED                                                    | redacted | 12-06-2026      |               | Open                  | node compat, bug        | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | node:dns Resolver.setServers(['127.0.0.1']) returns ETIMEOUT instead of ECONNREFUSED                                                    | redacted | 12-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Bun http.request() emits ECONNRESET after successful HTTP 101 Upgrade response                                                          | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Node compatibility: console.table() renders ANSI escape sequences instead of escaping them                                              | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | child_process.spawn resolves binaries differently than Node (PATH prioritization differs for node_modules/.bin)                         | redacted | 13-06-2026      | 13-06-2026    | Closed as not planned |                         |           |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | CJS interop: function exports with attached properties are not preserved in import (graphql-tag mismatch vs Node.js)                    | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | process lifecycle events (beforeExit/exit) are not emitted via process.emit as in Node.js                                               | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | async_hooks compatibility: executionAsyncId not preserved across fs callback execution                                                  | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Readable.pipe(net.Socket) closes connection before peer response is delivered                                                           | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | node:worker_threads MessagePort loses EventEmitter methods after transfer                                                               | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | tls.connect({ socket }) fails to intercept stream, causing subsequent data to re-trigger cleartext listeners and throw "Invalid socket" | redacted | 13-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | import.meta properties are accessible but not discoverable via Object.getOwnPropertyNames() / Reflect.ownKeys()                         | redacted | 14-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Bun accepts decorator syntax in plain .js files that Node and Deno reject                                                               | redacted | 15-06-2026      | 15-06-2026    | Closed as not planned |                         |           |
| redacted       | Deno                   | Deno        | 2.8.3           | Regression    |  Node compatibility: new Response([1, 2, 3]).text() throws, while Node.js returns "1,2,3"                                               | redacted | 15-06-2026      |               | Open                  | web                     | ✓         |
| redacted       | Deno                   | Deno        | 2.8.3           | Regression    | fetch().arrayBuffer() fails with TypeError: error reading a body from connection for successful 200 OK response                         | redacted | 15-06-2026      |               | Open                  | web, needs discussion   |           |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Worker data: URL errors do not populate ErrorEvent fields (filename, lineno, colno) in Bun                                              | redacted | 15-06-2026      | 19-06-2026    | Closed as duplicate   | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Bun prints multi-level Error.cause chain as separate errors instead of preserving Node-style nested stack trace                         | redacted | 15-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Bun normalizes Node.js http.request ECONNREFUSED errors and loses original Error instance structure                                     | redacted | 15-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Uncaught exception reporting ignores custom Error.stack value                                                                           | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Deno        | 2.8.3           | Regression    | Uncaught exception reporting ignores custom Error.stack value                                                                           | redacted | 16-06-2026      | 16-06-2026    | Closed as duplicate   |                         | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | node:worker_threads: postMessage() throws DataCloneError when transferring ReadableStream                                               | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | URL import from cdn.pika.dev loses named exports (isNumber is undefined)                                                                | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | Default import from Skypack xregexp@5.0.2 is missing XR.tag                                                                             | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | ReadableStream BYOB read() does not detach supplied ArrayBuffer                                                                         | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | crypto.generateKeyPair('ec', { namedCurve: 'secp256k1' }) returns ERR_OSSL_UNKNOWN_GROUP                                                | redacted | 20-06-2026      |               | Open                  |                         |           |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | node:net Server.listen fails with address family 10 when used via portfinder                                                            | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |
| redacted       | Deno                   | Bun         | 1.4.0           | Cross runtime | process.chdir throws ENOENT getcwd after current working directory is deleted                                                           | redacted | 16-06-2026      |               | Open                  | bug                     | ✓         |

## Reproduced Deno Security vulnerabilities that were reported to Deno (Regression) and Bun (Cross runtime)

| Original CVE   | Original GHSA       | Reported to | Assigned GHSA (private) | Status   |
| :------------- | :------------------ | :---------- | :---------------------- | :------- |
| CVE-2026-27190 | GHSA-hmh4-3xvx-q5hr | Bun         | GHSA-qhjx-h32w-978g     | Open     |
| CVE-2026-22864 | GHSA-m3c4-prhw-mrx6 | Bun         | GHSA-3mc9-5fwp-vg78     | Open     |
| CVE-2026-22863 | GHSA-5379-f5hf-w38v | Deno        | GHSA-59gx-449v-jw78     | Rejected |
| CVE-2025-61786 | GHSA-qq26-84mh-26j9 | Deno        | GHSA-jf59-8gq8-7p3x     | Open     |

## Assigned CVE/GHSA

| CVE/GHSA            | GHSA                | Package           | Fixed package version | Weekly Downloads |
| :------------------ | :------------------ | :---------------- | :-------------------- | :--------------- |
| CVE-2026-25521      | GHSA-rxrv-835q-v5mh | locutus           | 2.0.39                | 603646           |
| CVE-2026-25047      | GHSA-2733-6c58-pf27 | deepHas           | 1.0.8                 | 55               |
| GHSA-gcrg-hrj9-ggqg | GHSA-gcrg-hrj9-ggqg | confinit          | 0.5.1                 | 54               |
| CVE-2026-26021      | GHSA-2c4m-g7rx-63q7 | set-in            | 2.0.5                 | 131              |
| CVE-2026-27212      | GHSA-hmx5-qpq5-p643 | swiper            | 12.1.2                | 3820993          |
| CVE-2026-28491      | GHSA-q5jx-7q8j-95vw | properties-reader | 3.0.0                 | 3700316          |
| CVE-2026-33864      | GHSA-44fc-8fm5-q62h | convict           | 6.2.5                 | 959338           |

## Vulnerabilities Discovered

| SL  | Category            | Package                 | Original error version | Affected versions   | Current version | Weekly downloads | Repo         | CVE/GHSA            |
| :-- | :------------------ | :---------------------- | :--------------------- | :------------------ | :-------------- | :--------------- | :----------- | :------------------ |
| 1   | Prototype pollution | confinit                | 0.3.0                  | > =0.4.0            | 0.5.0           | 15               | url redacted | GHSA-gcrg-hrj9-ggqg |
| 2   | Prototype pollution | changeset               | 0.1.0                  | 0.2.6               | 0.2.6           | 5470             | url redacted |                     |
| 3   | Prototype pollution | connie                  | 0.1.0                  | >= 0.1.1            | 0.2.2           | 12               | url redacted |                     |
| 4   | Prototype pollution | convict                 | 6.0.0                  | 6.2.4               | 6.2.4           | 8,40,370         | url redacted | CVE-2026-33864      |
| 5   | Prototype pollution | deephas                 | 1.0.5                  | 1.0.7               | 1.0.7           | 148              | url redacted | CVE-2026-25047      |
| 6   | Prototype pollution | deepref                 | 1.1.1                  | 1.2.2               | 1.2.2           | 16               | url redacted |                     |
| 7   | Prototype pollution | doc-path                | 2.0.0                  | >= 2.3.0            | 4.1.3           | 8,55,548         | url redacted |                     |
| 8   | Prototype pollution | dot-object              | 2.1.2                  | >= 2.1.3            | 2.1.5           | 4,72,823         | url redacted |                     |
| 9   | Prototype pollution | eivifj/dot              | 1.0.2                  | 1.0.3               | 1.0.3           | 12,970           | url redacted |                     |
| 10  | Prototype pollution | flat                    | 5.0.0                  | 6.0.1               | 6.0.1           | 2,41,88,113      | url redacted |                     |
| 11  | Prototype pollution | flattenizer             | 0.0.5                  | > =1.1.1            | 1.1.3           | 2426             | url redacted |                     |
| 12  | Prototype pollution | getobject               | 0.1.0                  | > =1.0.0            | 1.1.1           | 8,64,034         | url redacted |                     |
| 13  | Prototype pollution | js-data                 | 3.0.9                  | 3.0.11              | 3.0.11          | 4286             | url redacted |                     |
| 14  | Prototype pollution | just-extend             | 3.0.0                  | 6.2.0               | 6.2.0           | 59,03,005        | url redacted |                     |
| 15  | Prototype pollution | just-safe-set           | 1.0.0                  | >=2.2.2             | 4.2.1           | 19,894           | url redacted |                     |
| 16  | Prototype pollution | keyget                  | 2.2.0                  | 2.4.0               | 2.4.0           | deprecated       | url redacted |                     |
| 17  | Prototype pollution | libnested               | 1.5.0                  | >=1.5.1             | 1.5.2           | 358              | url redacted |                     |
| 18  | Prototype pollution | locutus                 | 2.0.11                 | >=2.0.12            | 2.0.38          | 4,61,182         | url redacted | CVE-2026-25521      |
| 19  | Prototype pollution | madlib-object-utils     | 0.1.6                  | >=0.1.7             | 0.1.8           | 10               | url redacted |                     |
| 20  | Prototype pollution | mout                    | 1.0.0                  | >=1.2.3             | 1.2.4           | 5,15,563         | url redacted |                     |
| 21  | Prototype pollution | mpath                   | 0.4.1                  | >=0.8.4             | 0.9.0           | 35,58,001        | url redacted |                     |
| 22  | Prototype pollution | mquery                  | 3.2.1                  | >=3.2.5             | 6.0.0           | 34,71,874        | url redacted |                     |
| 23  | Prototype pollution | multi-ini               | 2.1.0                  | >=2.1.1             | 2.3.2           | 1568             | url redacted |                     |
| 24  | Prototype pollution | nested-object-assign    | 1.0.3                  | 1.0.4               | 1.0.4           | 56,961           | url redacted |                     |
| 25  | Prototype pollution | nested-property         | 0.0.5                  | >=3.0.0             | 4.0.0           | 1,55,797         | url redacted |                     |
| 26  | Prototype pollution | nis-utils               |                        | 0.6.10              | 0.6.10          | 7                | url redacted |                     |
| 27  | Prototype pollution | predefine               | 0.1.2                  | 0.1.3               | 0.1.3           | 14,133           | url redacted |                     |
| 28  | Prototype pollution | properties-reader       | 2.0.0                  | >=2.2.0             | 2.3.0           | 23,49,152        | url redacted | CVE-2026-28491      |
| 29  | Prototype pollution | safe-flat               | 2.0.0                  | >=2.0.2             | 2.1.0           | 1,82,479         | url redacted |                     |
| 30  | Prototype pollution | set-in                  | 1.0.0                  | >=2.0.1             | 2.0.4           | 18               | url redacted | CVE-2026-26021      |
| 31  | Prototype pollution | shvl                    | 2.0.1                  | >=2.0.3             | 3.0.0           | 1,08,967         | url redacted |                     |
| 32  | Prototype pollution | swiper                  | 6.5.0                  | >=6.5.1             | 12.1.0          | 32,02,474        | url redacted | CVE-2026-27212      |
| 33  | Prototype pollution | total.js                | 3.4.6                  | >=3.4.7             | 3.4.13          | 1212             | url redacted |                     |
| 34  | Prototype pollution | ts-dot-prop             | 1.4.0                  | >=1.4.1             | 2.1.4           | 2790             | url redacted |                     |
| 35  | Code injection      | json-ptr                | 2.0.0                  | >=2.0.0             | 3.1.1           |                  | url redacted |                     |
| 36  | Code injection      | mixin-pro               | 0.6.0                  | 0.6.7               | 0.6.7           | 25               | url redacted |                     |
| 37  | Code injection      | underscore              | 1.13.0                 | >=1.13.1            | 1.13.7          | 1,71,95,571      | url redacted |                     |
| 38  | Command injection   | apiconnect-cli-plugins  | 6.0.2                  | 8.0.1               | 8.0.1           | 41               | url redacted |                     |
| 39  | Command injection   | connection-tester       | 0.2.0                  | 0.2.0               | 0.2.1           | 3312             | url redacted |                     |
| 40  | Command injection   | curling                 | 0.2.0                  | 1.1.0               | 1.1.0           | 44               | url redacted |                     |
| 41  | Command injection   | get-npm-package-version | 1.0.6                  | >=1.0.7             | 1.1.1           | 312              | url redacted |                     |
| 42  | Command injection   | killport                | 1.0.1                  | 1.0.2               | 1.0.2           | 114              | url redacted |                     |
| 43  | Code injection      | mol-proto               | 0.1.3                  | did not npm publish | 0.2.0           | 59               | url redacted |                     |
| 44  | Code injection      | serialize-javascript    | 2.0.0                  | >=3.1.0             | 7.0.2           | 2,13,15,776      | url redacted |                     |
| 45  | Command injection   | im-resize               | 2.3.2                  | 2.3.2               | 2.3.2           | 245              | url redacted |                     |
| 46  | Command injection   | pdf-image               | 1.0.5                  | 2.0.0               | 2.0.0           | 3024             | url redacted |                     |
| 47  | Command injection   | vboxmanage.js           | 1.0.6                  | >=1.0.6             | 1.0.9           | 18               | url redacted |                     |
| 48  | Command injection   | xps                     | 1.0.2                  | 1.0.3               | 1.0.3           | deprecated       | url redacted |                     |
| 49  | Prototype pollution | controlled-merge        | 1.0.0                  | 1.3.0               | 1.3.0           | 15               | url redacted |                     |
| 50  | Prototype pollution | defaults-deep           | 0.2.0                  | 0.2.4               | 0.2.4           | 17892            | url redacted |                     |
| 51  | Prototype pollution | eivindfjeldstad-dot     | 0.0.1                  | 1.0.3               | 1.0.3           | 6647             | url redacted |                     |
| 52  | Path traversal      | hostr                   | 2.0.0                  | >=2.3.6             | 3.1.0           | 161              | url redacted |                     |
| 55  | Command injection   | im-metadata             | 3.0.1                  | 3.0.1               | 3.0.1           | 248              | url redacted |                     |
| 56  | Command injection   | macfromip               | 1.1.1                  | 1.1.1               | 1.1.1           | 22               | url redacted |                     |
| 57  | Path traversal      | node-srv                | 2.0.0                  | >=2.1.1             | 3.0.3           | 58               | url redacted |                     |
| 58  | Code injection      | m-log                   | 0.0.1                  | did not npm publish | 0.0.1           | 10               | url redacted |                     |
| 59  | Command injection   | node-im-resize          | 2.3.2                  | did not npm publish | 2.3.2           | 515              | url redacted |                     |

## Secbench Results

### Windows (Vulnerable npm package versions)

| code_injection |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 40   | 33   | 36  | 109   |
| Not vulnerable | 0    | 7    | 4   | 11    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 0    | 0    | 0   | 0     |
| Total          | 40   | 40   | 40  |       |

| redos          |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 79   | 89   | 74  | 242   |
| Not vulnerable | 19   | 9    | 24  | 52    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 0    | 0    | 0   | 0     |
| Total          | 98   | 98   | 98  |       |

| command_injection |      |      |     |       |
| :---------------- | :--- | :--- | :-- | :---- |
|                   | Node | Deno | Bun | Total |
| Vulnerable        | 71   | 68   | 67  | 206   |
| Not vulnerable    | 21   | 23   | 22  | 66    |
| Timeout           | 1    | 1    | 1   | 3     |
| Error             | 8    | 9    | 11  | 28    |
| Total             | 101  | 101  | 101 |       |

| path_traversal |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 157  | 152  | 144 | 478   |
| Not vulnerable | 13   | 16   | 23  | 27    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 0    | 2    | 3   | 5     |
| Total          | 170  | 170  | 170 |       |

| prototype_pollution (\_\_proto\_\_) |      |      |     |       |
| :---------------------------------- | :--- | :--- | :-- | :---- |
|                                     | Node | Deno | Bun | Total |
| Vulnerable                          | 183  | 10   | 183 | 376   |
| Not vulnerable                      | 8    | 181  | 6   | 195   |
| Timeout                             | 0    | 0    | 0   | 0     |
| Error                               | 1    | 1    | 3   | 5     |
| Total                               | 192  | 192  | 192 |       |

| prototype_pollution (constructor.prototype) |      |      |     |       |
| :------------------------------------------ | :--- | :--- | :-- | :---- |
|                                             | Node | Deno | Bun | Total |
| Vulnerable                                  | 183  | 76   | 183 | 442   |
| Not vulnerable                              | 8    | 115  | 6   | 129   |
| Timeout                                     | 0    | 0    | 0   | 0     |
| Error                                       | 1    | 1    | 3   | 5     |
| Total                                       | 192  | 192  | 192 |       |

## Linux (Vulnerable npm package versions)

| code_injection |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 40   | 32   | 36  | 108   |
| Not vulnerable | 0    | 7    | 4   | 11    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 0    | 1    | 0   | 1     |
| Total          | 40   | 40   | 40  |       |

| command_injection |      |      |     |       |
| :---------------- | :--- | :--- | :-- | :---- |
|                   | Node | Deno | Bun | Total |
| Vulnerable        | 91   | 91   | 92  | 274   |
| Not vulnerable    | 6    | 5    | 2   | 13    |
| Timeout           | 0    | 0    | 0   | 0     |
| Error             | 4    | 5    | 7   | 16    |
| Total             | 101  | 101  | 101 |       |

| redos          |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 95   | 94   | 79  | 268   |
| Not vulnerable | 3    | 4    | 19  | 26    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 0    | 0    | 0   | 0     |
| Total          | 98   | 98   | 98  |       |

| path_traversal |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 166  | 158  | 165 | 489   |
| Not vulnerable | 4    | 9    | 3   | 16    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 0    | 3    | 2   | 5     |
| Total          | 170  | 170  | 170 |       |

| prototype_pollution (\_\_proto\_\_) |      |      |     |       |
| :---------------------------------- | :--- | :--- | :-- | :---- |
|                                     | Node | Deno | Bun | Total |
| Vulnerable                          | 186  | 10   | 185 | 381   |
| Not vulnerable                      | 6    | 182  | 5   | 193   |
| Timeout                             | 0    | 0    | 0   | 0     |
| Error                               | 0    | 0    | 2   | 2     |
| Total                               | 192  | 192  | 192 |       |

| prototype_pollution (constructor.prototype) |      |      |     |       |
| :------------------------------------------ | :--- | :--- | :-- | :---- |
|                                             | Node | Deno | Bun | Total |
| Vulnerable                                  | 186  | 76   | 186 | 448   |
| Not vulnerable                              | 6    | 116  | 4   | 126   |
| Timeout                                     | 0    | 0    | 0   | 0     |
| Error                                       | 0    | 0    | 2   | 2     |
| Total                                       | 192  | 192  | 192 |       |

## Windows (Latest version of npm packages)

| code_injection |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 17   | 17   | 17  | 51    |
| Not vulnerable | 18   | 18   | 19  | 55    |
| Timeout        | 1    | 0    | 0   | 1     |
| Error          | 4    | 5    | 4   | 13    |
| Total          | 40   | 40   | 40  |       |

| redos          |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 16   | 16   | 11  | 43    |
| Not vulnerable | 66   | 65   | 70  | 201   |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 16   | 17   | 17  | 50    |
| Total          | 98   | 98   | 98  |       |

| command_injection_with_mutation |      |      |     |       |
| :------------------------------ | :--- | :--- | :-- | :---- |
|                                 | Node | Deno | Bun | Total |
| Vulnerable                      | 52   | 47   | 50  | 149   |
| Not vulnerable                  | 15   | 19   | 16  | 50    |
| Timeout                         | 1    | 0    | 2   | 3     |
| Error                           | 33   | 35   | 33  | 101   |
| Total                           | 101  | 101  | 101 |       |

| command_injection_without_mutation |      |      |     |       |
| :--------------------------------- | :--- | :--- | :-- | :---- |
|                                    | Node | Deno | Bun | Total |
| Vulnerable                         | 46   | 46   | 46  | 138   |
| Not vulnerable                     | 18   | 19   | 19  | 56    |
| Timeout                            | 3    | 1    | 1   | 5     |
| Error                              | 34   | 35   | 35  | 104   |
| Total                              | 101  | 101  | 101 |       |

| path_traversal |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 136  | 136  | 129 | 401   |
| Not vulnerable | 30   | 30   | 36  | 96    |
| Timeout        | 1    | 0    | 1   | 2     |
| Error          | 3    | 4    | 4   | 11    |
| Total          | 170  | 170  | 170 |       |

| prototype_pollution (constructor.prototype) |      |      |     |       |
| :------------------------------------------ | :--- | :--- | :-- | :---- |
|                                             | Node | Deno | Bun | Total |
| Vulnerable                                  | 52   | 21   | 54  | 127   |
| Not vulnerable                              | 91   | 122  | 90  | 303   |
| Timeout                                     | 2    | 1    | 0   | 3     |
| Error                                       | 47   | 48   | 48  | 143   |
| Total                                       | 192  | 192  | 192 |       |

| prototype_pollution_with_mutation |      |      |     |       |
| :-------------------------------- | :--- | :--- | :-- | :---- |
|                                   | Node | Deno | Bun | Total |
| Vulnerable                        | 87   | 38   | 86  | 211   |
| Not vulnerable                    | 71   | 116  | 71  | 258   |
| Timeout                           | 0    | 0    | 0   | 0     |
| Error                             | 34   | 38   | 35  | 107   |
| Total                             | 192  | 192  | 192 |       |

## Linux (Latest version of npm packages)

| code_injection |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 17   | 17   | 17  | 51    |
| Not vulnerable | 19   | 18   | 19  | 56    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 4    | 5    | 4   | 13    |
| Total          | 40   | 40   | 40  |       |

| redos          |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 16   | 16   | 11  | 43    |
| Not vulnerable | 66   | 65   | 70  | 201   |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 16   | 17   | 17  | 50    |
| Total          | 98   | 98   | 98  |       |

| command_injection_without_mutation |      |      |     |       |
| :--------------------------------- | :--- | :--- | :-- | :---- |
|                                    | Node | Deno | Bun | Total |
| Vulnerable                         | 53   | 52   | 53  | 158   |
| Not vulnerable                     | 16   | 16   | 15  | 47    |
| Timeout                            | 0    | 0    | 0   | 0     |
| Error                              | 32   | 33   | 33  | 98    |
| Total                              | 101  | 101  | 101 |       |

| command_injection_with_mutation (proto) |      |      |     |       |
| :-------------------------------------- | :--- | :--- | :-- | :---- |
|                                         | Node | Deno | Bun | Total |
| Vulnerable                              | 60   | 59   | 58  | 177   |
| Not vulnerable                          | 12   | 13   | 11  | 36    |
| Timeout                                 | 0    | 1    | 1   | 2     |
| Error                                   | 29   | 28   | 31  | 88    |
| Total                                   | 101  | 101  | 101 |       |

| path_traversal |      |      |     |       |
| :------------- | :--- | :--- | :-- | :---- |
|                | Node | Deno | Bun | Total |
| Vulnerable     | 143  | 142  | 145 | 430   |
| Not vulnerable | 23   | 25   | 22  | 70    |
| Timeout        | 0    | 0    | 0   | 0     |
| Error          | 4    | 3    | 3   | 10    |
| Total          | 170  | 170  | 170 |       |

| prototype_pollution (constructor.prototype) |      |      |     |       |
| :------------------------------------------ | :--- | :--- | :-- | :---- |
|                                             | Node | Deno | Bun | Total |
| Vulnerable                                  | 53   | 21   | 53  | 127   |
| Not vulnerable                              | 95   | 126  | 94  | 315   |
| Timeout                                     | 0    | 0    | 0   | 0     |
| Error                                       | 44   | 45   | 45  | 134   |
| Total                                       | 192  | 192  | 192 |       |

| prototype_pollution_with_mutation |      |      |     |       |
| :-------------------------------- | :--- | :--- | :-- | :---- |
|                                   | Node | Deno | Bun | Total |
| Vulnerable                        | 85   | 38   | 84  | 207   |
| Not vulnerable                    | 74   | 117  | 74  | 265   |
| Timeout                           | 0    | 0    | 0   | 0     |
| Error                             | 33   | 37   | 34  | 104   |
| Total                             | 192  | 192  | 192 |       |
