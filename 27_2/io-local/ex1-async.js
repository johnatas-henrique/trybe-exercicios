const readline = require('readline');
const fs = require('fs');
const util = require('util');
const path = require('path'); 

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(message, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const answer = await question('Qual o nome do arquivo: ');

  try {
    const file = await readFile(path.resolve(__dirname, answer));
    console.log(file.toString('utf8'));
    console.log(`Arquivo de ${file.byteLength} bytes`)
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.code}`);
  }
}

start();
