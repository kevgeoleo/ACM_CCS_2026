const ac = new AbortController();

let i = 0;
function run() {
  // This call is what causes the leak: it keeps adding dependant signals
  AbortSignal.any([ac.signal]);

  if (++i % 100_000 === 0) {
    const mem = process.memoryUsage().rss / 1024 / 1024;
    const kDependantSignals = Object.getOwnPropertySymbols(ac.signal).filter(
      (s) => s.toString() === 'Symbol(kDependantSignals)'
    )[0];
    const signals = ac.signal[kDependantSignals];
    console.log(`${i} - ${mem.toFixed(2)} MiB - ${signals?.size} signals`);
  }

  setImmediate(run);
}

run();
