const readline = require('readline');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);

function askUser(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question(`Qual o caminho do arquivo ${message}: `, answer => {
      rl.close();
      resolve(answer);
    })
  })
}

async function runApp() {
  const initAppTime = Date.now();
  const name1 = await askUser(1);
  const name2 = await askUser(2);

  try {
    const initFile1 = Date.now();
    const file1 = await readFile(path.resolve(name1));
    console.log(
      `\n\nArquivo de nome ${name1}, contém ${parseFloat(file1.byteLength / 1048576, 2)
        .toFixed(2)} MBytes`);
    const endFile1 = Date.now() - initFile1;
    console.log(`Tempo para ler arquivo ${name1}, ${endFile1 / 1000}s`);
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.code}`);
  }

  try {
    const initFile2 = Date.now();
    const file2 = await readFile(path.resolve(name2));
    console.log(
      `\n\nArquivo de nome ${name2}, contém ${parseFloat(file2.byteLength / 1048576, 2)
        .toFixed(2)} MBytes`);
    const endFile2 = Date.now() - initFile2;
    console.log(`Tempo para ler arquivo ${name2}, ${endFile2 / 1000}s`);
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.code}`);
  }

  const endAppTime = Date.now() - initAppTime;
  console.log(`\n\nTempo total ${endAppTime / 1000}s`);
}

runApp();
