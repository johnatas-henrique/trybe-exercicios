bgCor = document.querySelector('#bg-cor');
textoCor = document.querySelector('#texto-cor');
fonteTamanho = document.querySelector('#fonte-tamanho');
linhaAltura = document.querySelector('#linha-altura');
fonteFamilia = document.querySelector('#fonte-familia');
divAlterar = document.querySelector('#alterar');
btnSalvar = document.querySelector('#salvar');

const trocaBgCor = () => divAlterar.style.backgroundColor = bgCor.value;
const trocaTextoCor = () => divAlterar.style.color = textoCor.value;
const trocaFonteTamanho = () => divAlterar.style.fontSize = `${fonteTamanho.value}px`;
const trocaLinhaAltura = () => divAlterar.style.lineHeight = `${linhaAltura.value}px`;
const trocaFonteFamilia = () => divAlterar.style.fontFamily = fonteFamilia.value;
const salvarLocalStorage = () => {
    console.log('botão para salvar');
}


bgCor.addEventListener('change', trocaBgCor);
textoCor.addEventListener('change', trocaTextoCor);
fonteTamanho.addEventListener('change', trocaFonteTamanho);
linhaAltura.addEventListener('change', trocaLinhaAltura);
fonteFamilia.addEventListener('change', trocaFonteFamilia);
btnSalvar.addEventListener('click', salvarLocalStorage);
