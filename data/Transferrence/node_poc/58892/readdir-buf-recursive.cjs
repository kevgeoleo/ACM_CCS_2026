const fs = require('fs');
const path = require('path');

// Prepare a test directory with one nested subdirectory
const baseDir = path.join(__dirname, 'test-dir');
const nestedDir = path.join(baseDir, 'subdir');

fs.rmSync(baseDir, { recursive: true, force: true });
fs.mkdirSync(nestedDir, { recursive: true });

// Use a Buffer as the path argument, as allowed by the docs
const bufPath = Buffer.from(baseDir);

console.log('Calling fs.readdir with Buffer path and recursive: true...');

fs.readdir(bufPath, { recursive: true }, (err, entries) => {
  if (err) {
    console.error('Error name:', err.name);
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    return;
  }

  console.log('Entries:', entries);
});

// Also demonstrate the sync and promises variants
(async () => {
  try {
    console.log('\nCalling fs.readdirSync with Buffer path and recursive: true...');
    const syncEntries = fs.readdirSync(bufPath, { recursive: true });
    console.log('Sync entries:', syncEntries);
  } catch (e) {
    console.error('Sync error name:', e.name);
    console.error('Sync error code:', e.code);
    console.error('Sync error message:', e.message);
  }

  try {
    console.log('\nCalling fs.promises.readdir with Buffer path and recursive: true...');
    const asyncEntries = await fs.promises.readdir(bufPath, { recursive: true });
    console.log('Async entries:', asyncEntries);
  } catch (e) {
    console.error('Async error name:', e.name);
    console.error('Async error code:', e.code);
    console.error('Async error message:', e.message);
  }
})();
