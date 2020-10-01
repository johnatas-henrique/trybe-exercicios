const os = require('os');

console.log(`Plataforma: ${os.platform()}`)
console.log(`Versão: ${os.release()}`)
console.log(`Arquitetura: ${os.arch()}`)

const cpus = os.cpus()

cpus.forEach((core, index) => {
  console.log(`Core ${index + 1} - Modelo: ${core.model} | Velocidade ${core.speed / 1000}GHz`)
})

console.log(`Memória total: ${Math.round(os.totalmem() / (1048576 * 1024))}GB`)
