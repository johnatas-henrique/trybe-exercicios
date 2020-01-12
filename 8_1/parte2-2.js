let frase = `Poderiamos usar um prompt aqui e fazer o usuário inserir a frase.`;
const arrFrase = frase.split(" ");
let maiorPalavra = '';
for (let i = 0; i < arrFrase.length; i++) {
    if (arrFrase[i].length > maiorPalavra.length) {
        maiorPalavra = arrFrase[i];
    }
}
console.log(`A maior palavra dentre as digitadas é: ${maiorPalavra} que tem ${maiorPalavra.length} caracteres`);
