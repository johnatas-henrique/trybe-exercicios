const readLine = require("readline-sync");

const imprimeResultado = resultado => {
  if (resultado < 17) console.log(`Muito abaixo do peso, IMC: ${resultado}`);
  else if (17 <= resultado && resultado <= 18.49) console.log(`Abaixo do peso, IMC: ${resultado}`);
  else if (18.5 <= resultado && resultado <= 24.99) console.log(`Peso normal, IMC: ${resultado}`);
  else if (25 <= resultado && resultado <= 29.99) console.log(`Acima do peso, IMC: ${resultado}`);
  else if (30 <= resultado && resultado <= 34.99) console.log(`Obesidade I, IMC: ${resultado}`);
  else if (35 <= resultado && resultado <= 39.99) console.log(`Obesidade II (severa), IMC: ${resultado}`);
  else if (40 < resultado) console.log(`Obesidade III (mórbida), IMC: ${resultado}`);
}

const geraIMC = () => {
  const massa = readLine.questionFloat("Digite seu peso: ");
  const altura = readLine.questionFloat("Digite sua altura em cm: ");
  const resultado = (massa / (altura * altura)).toFixed(2);

  imprimeResultado(resultado);
};

geraIMC();
