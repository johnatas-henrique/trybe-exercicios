const readLine = require("readline-sync");

function geraIMC() {
  const massa = readLine.questionInt("Digite seu peso: ");
  const altura = readLine.questionInt("Digite sua altura em cm: ");
  console.log(`IMC igual a: ${massa / (altura ^ 2)}`);
};

geraIMC();
