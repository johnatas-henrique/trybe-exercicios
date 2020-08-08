const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o nome do arquivo: ', answer => {
  const readFile = param => {
    return new Promise((resolve, reject) => {
      fs.readFile(param, (err, ack) => {
        if (err) return reject(err);
        resolve(ack);
      })
    })
  }
  readFile(answer)
  .then(accept => {
    console.log(`Deu bom, conteúdo do arquivo: \n\n${accept}`);
    console.log(`Arquivo com tamanho de ${accept.byteLength} bytes.`)
  })
  .catch(fail => console.error(`Deu ruim ${fail.code}`));
  rl.close();
});
