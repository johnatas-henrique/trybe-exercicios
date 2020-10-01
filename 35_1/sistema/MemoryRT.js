const os = require('os');

setInterval(() => {
  const total = Math.round(os.totalmem() / 1048576);
  const used = Math.round((os.totalmem() - os.freemem()) / 1048576);
  console.log(`Memória utilizada: ${used}MBytes / Memória total: ${total}MBytes`);
}, 1000)
