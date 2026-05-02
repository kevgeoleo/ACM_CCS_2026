import fs from 'node:fs';

// This will trigger the crash in Node 24.3
fs.chown('foo', -1, 501, (err) => {
  console.log('callback called with:', err);
});
