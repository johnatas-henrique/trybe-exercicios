const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeDoArquivo;

rl.question('Qual o nome do arquivo: ', (answer) => {
  fs.readFile(answer, (err, data) => {
    if (err) {
      console.error(`Não conseguiu encontrar o arquivo, erro: ${err.code}`);
      process.exit(1);
    }
    console.log(`Conteúdo igual a:\n\n${data}`);
    console.log(`Arquivo com tamanho de ${data.byteLength} bytes.`)
  });
  rl.close();
});

