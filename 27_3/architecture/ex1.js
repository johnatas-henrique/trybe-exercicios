const fs = require('fs');
const readlineSync = require('readline-sync');
console.time('all');
const file1 = readlineSync.question('Insira o nome do arquivo 1: ');
const file2 = readlineSync.question('Insira o nome do arquivo 2: ');

console.time('file1');
const readFile1 = fs.readFileSync(file1);
console.log(`Tamanho em MBytes: ${parseFloat(readFile1.byteLength / 1048576).toFixed(2)}`);
console.timeEnd('file1');

console.time('file2');
const readFile2 = fs.readFileSync(file2);
console.log(`\n\nTamanho em MBytes: ${parseFloat(readFile2.byteLength / 1048576).toFixed(2)}`);
console.timeEnd('file2');

console.timeEnd('all');
