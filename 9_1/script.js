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
    localStorage.setItem('bgCor', bgCor.value);
    localStorage.setItem('textoCor', textoCor.value);
    localStorage.setItem('fonteTamanho', fonteTamanho.value);
    localStorage.setItem('linhaAltura', linhaAltura.value);
    localStorage.setItem('fonteFamilia', fonteFamilia.value);
}


bgCor.addEventListener('change', trocaBgCor);
textoCor.addEventListener('change', trocaTextoCor);
fonteTamanho.addEventListener('change', trocaFonteTamanho);
linhaAltura.addEventListener('change', trocaLinhaAltura);
fonteFamilia.addEventListener('change', trocaFonteFamilia);
btnSalvar.addEventListener('click', salvarLocalStorage);


const locBgCor = localStorage.getItem('bgCor');
const locTextoCor = localStorage.getItem('textoCor');
const locFonteTamanho = localStorage.getItem('fonteTamanho');
const locLinhaAltura = localStorage.getItem('linhaAltura');
const locFonteFamilia = localStorage.getItem('fonteFamilia');

if (locBgCor) divAlterar.style.backgroundColor = locBgCor;
if (locTextoCor) divAlterar.style.color = locTextoCor;
if (locFonteTamanho) divAlterar.style.fontSize = `${locFonteTamanho}px`;
if (locLinhaAltura) divAlterar.style.lineHeight = `${locLinhaAltura}px`;
if (locFonteFamilia) divAlterar.style.fontFamily = locFonteFamilia;
